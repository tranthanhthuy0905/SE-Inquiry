package backend.controllers;
import backend.Pojos.ScriptRequest;
import backend.models.Script;
import backend.services.ScriptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("api/v1/script")
public class ScriptController {

    @Autowired
    ScriptService scriptService;

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

//    @PutMapping(path="update/{scriptId}")
//    public Optional<Script> updateScript (@RequestBody ScriptRequest scriptRequest) {
//        return scriptService.updateScript(scriptRequest);
//    }
}

