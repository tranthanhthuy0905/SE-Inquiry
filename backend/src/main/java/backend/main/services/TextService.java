package backend.main.services;

import backend.main.exceptions.ApiRequestException;
import backend.main.models.Choice;
import backend.main.models.Text;
import backend.main.repositories.ChoiceRepository;
import backend.main.repositories.TextRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TextService {

    @Autowired
    private TextRepository textRepository;

    @Autowired
    private ChoiceRepository choiceRepository;

    public TextService () {

    }

    public Optional<Text> getTextByTitle(String title) {
        return textRepository.findTextByTitle(title);
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
public Page<Text> findAllWithPage(Pageable pageable){
        return textRepository.findAll(pageable);
}

    public Text createText(Text text) {
        try {
            // Check exist - same title, same scriptId
            Text existedText = textRepository.findByTitleAndScript(text.getTitle(), text.getScript()).get();
            try {
                existedText.equals(text);
                return existedText;
            } catch(Exception e) {
                throw new ApiRequestException("Cannot create two chapters with the same title in one script");
            }
        } catch(Exception e) {
            List<Choice> listChoices = choiceRepository.findAll();
            for (Choice choice: listChoices) {
                if (choice.getContent().equals(text.getTitle())) {

                    // Find Script choice belongs to
//                    UUID textId = choice.getTextID();
//                    UUID scriptId = getScriptID(textId);
//                    UUID scriptId = textRepository.findScriptIDByTextID(textId);

                    // Same script, same Title as Choice content
//                    if (scriptId == text.getScriptID()) {
                    try {
                        // Existed
                        return textRepository.findByTextID(text.getTextID()).get();
                    } catch (Exception err) {
                        text.setTextID(choice.getChoiceID());
                        return textRepository.save(text);
                    }
//                    }
                }
            }
            // Different Script, different Title from Content
            return textRepository.save(text);
        }
    }

//    public List<Text> getAllTextsByScriptID(UUID scriptID) {
//        return textRepository.findByScriptID(scriptID);
//    }

    public Optional<Text> getTextByTextID(UUID textID) {
        return textRepository.findByTextID(textID);
    }

//    public UUID getScriptID(UUID textId) {
//        return textRepository.findScriptIDByTextID(textId);
//    }

//    public Text updateText(TextRequest textRequest) {
//        UUID textID = textRequest.textID;
//        String title = textRequest.title;
//        String content = textRequest.content;
//        Text textUpdate = textRepository.findById(textID).get();
//        if (title != null) {
//            textUpdate.setTitle(title);
//        }
//        if (content != null) {
//            textUpdate.setContent(content);
//        }
//        Date update = new Date();
//        Timestamp updated_at = new Timestamp(update.getTime());
//        textUpdate.setUpdatedAt(updated_at);
//        return textRepository.save(textUpdate);
//    }

    public Text MatchChoiceToText(UUID textID, UUID choiceID) {
        Text text = textRepository.findByTextID(textID).get();
        Choice choice = choiceRepository.findByChoiceID(choiceID).get();
        Set<Choice> choices = text.getChoices();
        choices.add(choice);
        text.setChoices(choices);
        return textRepository.save(text);
    }

}
