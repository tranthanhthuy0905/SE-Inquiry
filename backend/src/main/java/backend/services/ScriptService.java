package backend.services;

import backend.Pojos.ScriptRequest;
import backend.exceptions.ApiRequestException;
import backend.models.Choice;
import backend.models.Script;
import backend.repositories.ScriptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.sql.Timestamp;
import java.util.*;

@Service
public class ScriptService {

    @Autowired
    ScriptRepository scriptRepository;

    public ScriptService() {
    }

    public Script createScript(Script script) {
        return scriptRepository.save(script);
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

//    public Optional<Script> updateScript(ScriptRequest scriptRequest) {
//        Date date = new Date();
//        Timestamp time = new Timestamp(date.getTime());
//        return scriptRepository.updateScript(scriptRequest, time);
//    }
}
