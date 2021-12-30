package backend.services;

import backend.exceptions.ApiRequestException;
import backend.models.Text;
import backend.repositories.TextRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class TextService {

    @Autowired
    TextRepository textRepository;

    public TextService () {

    }

    public Dictionary findAllTexts(int limit, int offset) {

        Sort arrangement = Sort.by(Sort.Direction.DESC, "createdAt");
        Dictionary result = new Hashtable();
        List<Text> data = textRepository.findAll(arrangement);
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
            throw new ApiRequestException("Offset should be less than total of Texts");
        }
    }

    public Text createText(Text text) {
        return textRepository.save(text);
    }

    public List<Text> getAllTextsByScriptID(UUID scriptID) {
        return textRepository.findByScriptID(scriptID);
    }

    public Optional<Text> getTextByTextID(UUID textID) {
        return textRepository.findByTextID(textID);
    }

    public UUID getScriptID(UUID textId) {
        return textRepository.findScriptIDByTextID(textId);
    }

//    public Optional<Text> updateScriptId(UUID textId, ChoiceRequest choiceRequest) {
//        return textRepository.saveUpdateScriptID(textId, choiceRequest.scriptID, choiceRequest.updatedAt);
//    }

}
