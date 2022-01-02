package backend.Pojos;

import org.springframework.lang.*;

import java.util.UUID;

public class ScriptRequest {

    public ScriptRequest(@Nullable String title, @Nullable String description, @NonNull UUID scriptID) {
        this.title = title;
        this.description = description;
        this.scriptID = scriptID;
    }

    @Nullable public String title;

    @Nullable public String description;

    @NonNull public UUID scriptID;

}
