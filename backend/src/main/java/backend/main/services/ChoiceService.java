package backend.main.services;

import backend.main.Pojos.ChoiceRequest;
import backend.main.exceptions.ApiRequestException;
import backend.main.models.Choice;
import backend.main.models.Script;
import backend.main.repositories.ChoiceRepository;
import backend.main.repositories.ScriptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.sql.Timestamp;
import java.util.*;

@Service
public class ChoiceService {

    @Autowired
    private ChoiceRepository choiceRepository;

//    @Autowired
//    private ScriptRepository scriptRepository;

    public ChoiceService () {

    }

    public Dictionary findAllChoices(int limit, int offset) {

        Sort arrangement = Sort.by(Sort.Direction.DESC, "createdAt");
        Dictionary result = new Hashtable();
        List<Choice> data = choiceRepository.findAll(arrangement);
        int count = data.size();

        if (offset < count || (offset == 0 && count == 0)) {
            data = data.subList(offset, count);

            if (limit != 0) {
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
        } else {
            throw new ApiRequestException("Offset should be less than total of Choices");
        }
    }

    public Choice createChoice(Choice choice) {
        String content = choice.getContent();
        UUID scriptID = choice.getScriptID();
        if (scriptID != null) {
            try {
                return choiceRepository.findByContentAndScriptID(content, scriptID).get();
            } catch (Exception e) {
                return choiceRepository.save(choice);
            }
        } else {
            throw new ApiRequestException("scriptId is required");
        }
    }

//    public List<Choice> getAllChoicesByTextID(UUID textID) {
//
//        try {
//            return choiceRepository.findByTextID(textID);
//        } catch (Exception e ) {
//            return new ArrayList<>();
//        }
//    }

    public Optional<Choice> getChoiceByChoiceID(UUID choiceID) {
        return choiceRepository.findByChoiceID(choiceID);
    }

//    public UUID getTextID(UUID choiceId) {
//        return choiceRepository.findTextIDByChoiceID(choiceId);
//    }

//    public Optional<Choice> updateChoice(ChoiceRequest choiceRequest) {
//        UUID choiceID = choiceRequest.getChoiceID();
//        UUID scriptID = choiceRequest.getScriptID();
//        String content = choiceRequest.getContent();
//        Choice choiceUpdate = choiceRepository.findById(choiceID).get();
//        if (scriptID != null) {
//            choiceUpdate.setScriptID(scriptID);
//        }
//        if (content != null) {
//            choiceUpdate.setContent(content);
//        }
//        Date update = new Date();
//        Timestamp updated_at = new Timestamp(update.getTime());
//        choiceUpdate.setUpdatedAt(updated_at);
//        return choiceRepository.saveUpdateChoice(choiceUpdate);
//    }

//    public Choice MatchChoiceToScript(UUID choiceID, UUID scriptID) {
//        Choice choice = choiceRepository.findByChoiceID(choiceID).get();
//        UUID script = scriptRepository.findById(scriptID).get();
//        choice.setScript(script);
//        return choiceRepository.save(choice);
//    }
}
