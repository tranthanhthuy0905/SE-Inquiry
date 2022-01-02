package backend.main.Pojos;

import lombok.Data;
import org.springframework.lang.*;

import java.util.UUID;

@Data
public class ScriptRequest {


    public ScriptRequest(@Nullable String title, @Nullable String description, @NonNull UUID scriptID, @Nullable String author) {
        this.title = title;
        this.description = description;
        this.scriptID = scriptID;
        this.author = author;
    }

    @Nullable public String title;

    @Nullable public String description;

    @NonNull public UUID scriptID;

    @Nullable public String author;
}
