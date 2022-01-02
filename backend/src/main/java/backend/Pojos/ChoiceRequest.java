package backend.Pojos;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Timestamp;
import java.util.*;

public class ChoiceRequest {

    public void setUpdatedAt(Timestamp updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Timestamp updatedAt;

    public UUID textID;

    public ChoiceRequest(@JsonProperty("textId") UUID textID, @JsonProperty("updatedAt") Timestamp updatedAt) {
        this.textID = textID;
        this.updatedAt = updatedAt;

    }
}
