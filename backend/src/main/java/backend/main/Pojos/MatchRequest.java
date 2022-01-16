package backend.main.Pojos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class MatchRequest {

    private UUID textId;
    private UUID choiceId;
}
