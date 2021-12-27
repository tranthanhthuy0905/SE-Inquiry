package backend.services;

import backend.Pojos.ChoiceRequest;
import backend.models.Choice;
import backend.repositories.ChoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.*;

@Service
public class ChoiceService {

    @Autowired
    ChoiceRepository choiceRepository;

    public ChoiceService () {

    }

    public Dictionary findAllChoices(int limit, int offset) {

        Sort arrangement = Sort.by(Sort.Direction.DESC, "createdAt");
        Dictionary result = new Hashtable();
        List<Choice> data = choiceRepository.findAll(arrangement);
        int count = data.size();

        data = data.subList(offset, data.size());

        if (limit != -1) {
            if (offset + limit <= data.size()) {
                data = data.subList(0, limit);
            } else {
                data = data.subList(0, data.size());
            }
        }

        result.put("count", count);
        result.put("limit", limit);
        result.put("offset", offset);
        result.put("data", data);
        return result;
    }

    public Choice createChoice(Choice choice) {
        return choiceRepository.save(choice);
    }

    public List<Choice> getAllChoicesByTextID(UUID textID) {
        return choiceRepository.findByTextID(textID);
    }

    public Optional<Choice> getChoiceByChoiceID(UUID choiceID) {
        return choiceRepository.findByChoiceID(choiceID);
    }

    public UUID getTextID(UUID choiceId) {
        return choiceRepository.findTextIDByChoiceID(choiceId);
    }

    public Optional<Choice> updateTextId(UUID choiceId, ChoiceRequest choiceRequest) {
        return choiceRepository.saveUpdateTextID(choiceId, choiceRequest.textID, choiceRequest.updatedAt);
    }
}
