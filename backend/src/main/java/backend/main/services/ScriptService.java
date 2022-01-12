package backend.main.services;

import backend.main.Pojos.ScriptRequest;
import backend.main.exceptions.ApiRequestException;
import backend.main.models.Choice;
import backend.main.models.Script;
import backend.main.models.Text;
import backend.main.repositories.ScriptRepository;
import backend.main.repositories.TextRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.*;
import java.util.concurrent.TimeUnit;

@Service
public class ScriptService {

    @Autowired
    private ScriptRepository scriptRepository;

    @Autowired
    private TextRepository textRepository;

    public Script createScript(Script script) {
        return scriptRepository.createScript(script).get();
    }

    public Dictionary getAllScripts(int limit, int offset) {
        Sort arrangement = Sort.by(Sort.Direction.DESC, "publishedAt");
        Dictionary result = new Hashtable();
        List<Script> data = scriptRepository.findAll(arrangement);
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

    public Optional<Script> getScriptById(UUID scriptID) {
        return scriptRepository.findById(scriptID);
    }

//    public Script updateScript(ScriptRequest scriptRequest) {
//        UUID scriptID = scriptRequest.scriptID;
//        String title = scriptRequest.title;
//        String description = scriptRequest.description;
//        String author = scriptRequest.author;
//        Script scriptUpdate = scriptRepository.findById(scriptID).get();
//        if (title != null) {
//            scriptUpdate.setTitle(title);
//        }
//        if (description != null) {
//            scriptUpdate.setDescription(description);
//        }
//        if (author != null) {
//            scriptUpdate.setAuthor(author);
//        }
//        Date update = new Date();
//        Timestamp updated_at = new Timestamp(update.getTime());
//        scriptUpdate.setUpdatedAt(updated_at);
//        return scriptRepository.save(scriptUpdate);
//    }

    public Script MatchTextToScript(UUID textID, UUID scriptID) {
        Text text = textRepository.findByTextID(textID).get();
        Script script = scriptRepository.findById(scriptID).get();
        Set<Text> texts = script.getTexts();
        texts.add(text);
        script.setTexts(texts);
        return scriptRepository.save(script);
    }

}
