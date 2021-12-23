package backend.services;

import backend.Pojos.ChoiceRequest;
import backend.models.Choice;
import backend.repositories.ChoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ChoiceService {

    @Autowired
    ChoiceRepository choiceRepository;

    public ChoiceService () {

    }

    public Choice createChoice(Choice choice) {
        return choiceRepository.save(choice);
    }

    public Optional<Choice> getChoiceByID(UUID choiceID) {
        return choiceRepository.findById(choiceID);
    }

    public List<Choice> getAllChoicesByTextID(UUID textID) {
        return choiceRepository.findChoicesByTextID(textID);
    }

    public void deleteChoiceByID(UUID choiceId) {
        choiceRepository.deleteById(choiceId);
    }

}
