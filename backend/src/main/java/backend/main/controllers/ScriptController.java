package backend.main.controllers;
import backend.main.Pojos.MatchRequest;
import backend.main.Pojos.MatchTextToScript;
import backend.main.Pojos.ScriptRequest;
import backend.main.exceptions.ApiRequestException;
import backend.main.models.Script;
import backend.main.models.Text;
import backend.main.repositories.ScriptRepository;
import backend.main.services.ScriptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("api/v1/script")
public class ScriptController {

    @Autowired
    private ScriptService scriptService;

    @Autowired
    private ScriptRepository scriptRepository;

    @RequestMapping(value = "/create", method = RequestMethod.POST,
            consumes = "application/json")
    public ResponseEntity<?> createScript(@RequestBody ScriptRequest script) {
        Script scriptInput = new Script(script.getTitle(),script.getDescription(), script.getAuthor());
        return new ResponseEntity<>(scriptRepository.save(scriptInput), HttpStatus.OK) ;
    }

    @GetMapping()
    public Dictionary getAllScripts(@RequestParam("limit") int limit, @RequestParam("offset") int offset) {
        try {
            return scriptService.getAllScripts(limit, offset);
        } catch (Exception e) {
            throw new ApiRequestException("There is no data found");
        }
    }

    @GetMapping(path = "detail/{scriptId}")
    public Optional<Script> getScriptById(@PathVariable("scriptId") UUID scriptID) {
        return scriptService.getScriptById(scriptID);
    }

//    @PutMapping("update")
//    public Script updateScript (@RequestBody ScriptRequest scriptRequest) {
//        if (scriptRequest.scriptID == null) {
//            throw new ApiRequestException("scriptID is required to update the script");
//        }
//        return scriptService.updateScript(scriptRequest);
//
//    }

    @DeleteMapping()
    public String deleteAllTexts() {
        try {
            scriptRepository.deleteAll();
            return "Deletion all scripts done";
        } catch(Exception e) {
            throw e;
        }
    }

    @PutMapping("matchScript")
    public Script matchTextToScript(@RequestBody MatchTextToScript request) {
        return scriptService.MatchTextToScript(request.getTextId(), request.getScriptId());
    }

}

