package backend.main.Pojos;

import lombok.Data;

import java.util.UUID;

@Data
public class MatchRequest {

    private UUID textId;
    private UUID choiceId;
    private UUID scriptId;
}
