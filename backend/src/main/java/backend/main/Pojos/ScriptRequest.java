package backend.main.Pojos;

import backend.main.models.Text;
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

    @Nullable public String title;

    @Nullable public String description;

    @Nullable public String author;
}
