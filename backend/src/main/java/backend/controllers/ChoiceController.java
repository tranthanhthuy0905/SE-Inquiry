package backend.controllers;

import backend.Pojos.ChoiceRequest;
import backend.exceptions.ApiRequestException;
import backend.models.Choice;
import backend.repositories.ChoiceRepository;
import backend.services.ChoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.*;
import java.util.concurrent.atomic.AtomicReference;

@RestController
@RequestMapping("api/v1/choice")
public class ChoiceController {

    @Autowired
    ChoiceRepository choiceRepository;

    @Autowired
    ChoiceService choiceService;

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
