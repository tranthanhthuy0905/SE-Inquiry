package backend.main.controllers;

import backend.main.Pojos.ChoiceRequest;
import backend.main.Pojos.MatchRequest;
import backend.main.models.Choice;
import backend.main.models.Text;
import backend.main.repositories.ChoiceRepository;
import backend.main.services.ChoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @RequestMapping(value = "/create", method = RequestMethod.POST,
            consumes = "application/json")
    public ResponseEntity<?> createChoice(@RequestBody ChoiceRequest choice) {
        Choice choiceInput = new Choice(choice.getScriptID(), choice.getContent());
        return new ResponseEntity<>(choiceRepository.save(choiceInput), HttpStatus.OK) ;
    }

    @GetMapping()
    public Dictionary getAllChoices(@RequestParam("limit") int limit, @RequestParam("offset") int offset) {
           return choiceService.findAllChoices(limit, offset);
    }

    @GetMapping(path = "detail/{choiceId}")
    public Optional<Choice> getChoiceById(@PathVariable("choiceId") UUID choiceID) {
        return choiceService.getChoiceByChoiceID(choiceID);
    }

//    @GetMapping(path = "group/{textId}")
//    public List<Choice> getChoicesByTextId(@PathVariable("textId") UUID textID) {
//        return choiceService.getAllChoicesByTextID(textID);
//    }

//    @GetMapping(path="textId/{choiceId}")
//    public UUID getTextId (@RequestParam("choiceId") UUID choiceID) {
//        return choiceService.getTextID(choiceID);
//    }
//
    @DeleteMapping()
    public String deleteAllChoices() {
        try {
            choiceRepository.deleteAll();
            return "Deletion all choices done";
        } catch(Exception e) {
            throw e;
        }
    }

    @DeleteMapping(path="delete/{choiceId}")
    public String deleteChoiceById(@PathVariable("choiceId") UUID choiceID) {
        try {
            choiceRepository.deleteById(choiceID);
            return "Deletion choice by Id done";
        } catch(Exception e) {
            throw e;
        }
    }

//    @PutMapping("update")
//    public Optional<Choice> updateChoice (@RequestBody ChoiceRequest choiceRequest) {
//        return choiceService.updateChoice(choiceRequest);
//    }

//    @PutMapping("matchScript")
//    public Choice matchScriptToChoice(@RequestBody MatchRequest request) {
//        return choiceService.MatchChoiceToScript(request.getTextId(), request.getChoiceId());
//    }
}
