package backend.main.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import java.sql.Timestamp;
import java.util.Date;
import java.util.UUID;

import javax.persistence.*;

@NoArgsConstructor
@Data
@Entity
@Table(name = "choice")
public class Choice {

    @Id
    private UUID choiceID;
    @Nullable private UUID textID;
    private String content;
    private String title;
    private Timestamp createdAt;
    private Timestamp updatedAt;

    // constructor
    public Choice(@JsonProperty("textId") UUID textID, @JsonProperty("choiceId") UUID choiceID,
                  @JsonProperty("content") String content,@JsonProperty("title") String title,  @JsonProperty("created_at") Timestamp createdAt,
                  @JsonProperty("updated_at") Timestamp updatedAt) {
        this.choiceID = UUID.randomUUID();
        this.textID = textID;
        this.content = content;
        this.title = title;
        Date date = new Date();
        Timestamp time = new Timestamp(date.getTime());
        this.createdAt = time;
        this.updatedAt = time;
    }
}
