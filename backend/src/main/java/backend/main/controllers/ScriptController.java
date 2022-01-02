package backend.main.controllers;
import backend.main.Pojos.ScriptRequest;
import backend.main.exceptions.ApiRequestException;
import backend.main.models.Script;
import backend.main.repositories.ScriptRepository;
import backend.main.services.ScriptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("api/v1/script")
public class ScriptController {

    @Autowired
    private ScriptService scriptService;

    @Autowired
    private ScriptRepository scriptRepository;

    @PostMapping("create")
    public Script createScript(@RequestBody Script script) {
        return scriptService.createScript(script);
    }

    @GetMapping()
    public Dictionary getAllScripts(@RequestParam("limit") int limit, @RequestParam("offset") int offset) {
        return scriptService.getAllScripts(limit, offset);
    }

    @GetMapping(path = "detail/{scriptId}")
    public Optional<Script> getScriptById(@PathVariable("scriptId") UUID scriptID) {
        return scriptService.getScriptById(scriptID);
    }

    @PutMapping("update")
    public Script updateScript (@RequestBody ScriptRequest scriptRequest) {
        if (scriptRequest.scriptID == null) {
            throw new ApiRequestException("scriptID is required to update the script");
        }
        return scriptService.updateScript(scriptRequest);

    }

}

