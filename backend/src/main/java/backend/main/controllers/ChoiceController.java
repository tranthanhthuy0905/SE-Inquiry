package backend.main.controllers;

import backend.main.Pojos.ChoiceRequest;
import backend.main.models.Choice;
import backend.main.repositories.ChoiceRepository;
import backend.main.services.ChoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.*;

@RestController
@RequestMapping("api/v1/choice")
public class ChoiceController {

    @Autowired
    private ChoiceRepository choiceRepository;

    @Autowired
    private ChoiceService choiceService;

    @PostMapping("create")
    public Choice createChoice(@RequestBody Choice choice) {
        return choiceService.createChoice(choice);
    }

    @GetMapping()
    public Dictionary getAllChoices(@RequestParam("limit") int limit, @RequestParam("offset") int offset) {
           return choiceService.findAllChoices(limit, offset);
    }

    @GetMapping(path = "detail/{choiceId}")
    public Optional<Choice> getChoiceById(@PathVariable("choiceId") UUID choiceID) {
        return choiceService.getChoiceByChoiceID(choiceID);
    }

    @GetMapping(path = "group/{textId}")
    public List<Choice> getChoicesByTextId(@PathVariable("textId") UUID textID) {
        return choiceService.getAllChoicesByTextID(textID);
    }

    @GetMapping(path="textId/{choiceId}")
    public UUID getTextId (@RequestParam("choiceId") UUID choiceID) {
        return choiceService.getTextID(choiceID);
    }

    @DeleteMapping()
    public String deleteAllChoices() {
        try {
            choiceRepository.deleteAll();
            return "Deletion all choices done";
        } catch(Exception e) {
            throw e;
        }
    }

    @PutMapping(path="update/{choiceId}")
    public Optional<Choice> updateChoiceWithTextID (@RequestBody ChoiceRequest choiceRequest, @PathVariable("choiceId") UUID choiceId) {
        Date date = new Date();
        Timestamp time = new Timestamp(date.getTime());
        choiceRequest.setUpdatedAt(time);
        return choiceService.updateTextId(choiceId, choiceRequest);
    }
}
