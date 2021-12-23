package backend.controllers;

import backend.models.Choice;
import backend.repositories.ChoiceRepository;
import backend.services.ChoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/choice")
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
    public List<Choice> getAllChoices() {
        return choiceRepository.findAll();
    }
}
