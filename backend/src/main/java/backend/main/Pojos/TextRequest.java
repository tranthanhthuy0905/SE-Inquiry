package backend.main.Pojos;

import java.util.*;

import lombok.Data;
import org.springframework.lang.*;

@Data
public class TextRequest {

    public TextRequest(@NonNull UUID textID, @Nullable String title, @Nullable String content) {
        this.textID = textID;
        this.title = title;
        this.content = content;
    }

    @NonNull public UUID textID;
    @Nullable public String title;
    @Nullable public String content;
}
