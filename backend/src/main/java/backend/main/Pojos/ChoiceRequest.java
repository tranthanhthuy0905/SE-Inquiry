package backend.main.Pojos;

import backend.main.models.Script;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.sql.Timestamp;
import java.util.*;

@Data
public class ChoiceRequest {

    public UUID scriptID;
    //public UUID choiceID;
    public String content;

    public ChoiceRequest(UUID scriptID, String content) {
        this.scriptID = scriptID;
        //this.choiceID = choiceID;
        this.content = content;
    }
}
