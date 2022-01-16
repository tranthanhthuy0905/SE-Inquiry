package backend.main.Pojos;

import lombok.Data;
import org.springframework.lang.*;

import java.util.Set;
import java.util.UUID;

@Data
public class ScriptRequest {


    public ScriptRequest(@Nullable String title, @Nullable String description, @Nullable String author) {
        this.title = title;
        this.description = description;
        this.author = author;
    }

    public String title;

    public String description;

    public String author;
}
