package backend.repositories;
import backend.models.Choice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface ChoiceRepository extends JpaRepository<Choice, UUID> {

    List<Choice> findChoicesByTextID(UUID textID);

    UUID findTextIDByChoiceID(UUID choiceID);

    Optional<Choice> updateChoiceById(UUID choiceID, Choice choice);

    Optional<Choice> updateChoiceByTextID(UUID textID, Choice choice);
}
