package backend.controllers;

import backend.models.Text;
import backend.repositories.TextRepository;
import backend.services.TextService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("api/v1/text")
public class TextController {
    @Autowired
    TextRepository textRepository;

    @Autowired
    TextService textService;

    @PostMapping("create")
    public Text createText(@RequestBody Text text) {
        return textService.createText(text);
    }

    @GetMapping()
    public Dictionary getAllTexts(@RequestParam("limit") int limit, @RequestParam("offset") int offset) {
        return textService.findAllTexts(limit, offset);
    }

    @GetMapping(path = "detail/{textId}")
    public Optional<Text> getTextById(@PathVariable("textId") UUID textID) {
        return textService.getTextByTextID(textID);
    }

    @GetMapping(path = "group/{scriptId}")
    public List<Text> getTextsByScriptId(@PathVariable("scriptId") UUID scriptID) {
        return textService.getAllTextsByScriptID(scriptID);
    }

    @GetMapping(path="scriptId/{textId}")
    public UUID getScriptId (@RequestParam("textId") UUID textID) {
        return textService.getScriptID(textID);
    }

    @DeleteMapping()
    public String deleteAllTexts() {
        try {
            textRepository.deleteAll();
            return "Deletion all texts done";
        } catch(Exception e) {
            throw e;
        }
    }

//    @PutMapping(path="update/{textId}")
//    public Optional<Text> updateTextWithScriptID (@RequestBody ChoiceRequest choiceRequest, @PathVariable("choiceId") UUID choiceId) {
//        Date date = new Date();
//        Timestamp time = new Timestamp(date.getTime());
//        choiceRequest.setUpdatedAt(time);
//        return choiceService.updateTextId(choiceId, choiceRequest);
//    }
}
