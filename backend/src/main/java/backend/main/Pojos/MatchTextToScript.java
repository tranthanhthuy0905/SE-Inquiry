package backend.main.Pojos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class MatchTextToScript {

    private UUID textId;
    private UUID scriptId;
}

