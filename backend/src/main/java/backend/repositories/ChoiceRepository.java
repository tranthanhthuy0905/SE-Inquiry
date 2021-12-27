package backend.repositories;
import backend.Pojos.ChoiceRequest;
import backend.models.Choice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.*;

@Repository
public interface ChoiceRepository extends JpaRepository<Choice, UUID> {

    @Query(value="SELECT * FROM choice_db WHERE textid = :textId", nativeQuery = true)
    List<Choice> findByTextID(@Param("textId")UUID textID);

    @Query(value="SELECT * FROM choice_db WHERE choiceid = :choiceId", nativeQuery = true)
    Optional<Choice> findByChoiceID(@Param("choiceId") UUID choiceID);

    @Query(value="SELECT textid FROM choice_db WHERE choiceid=:choiceId", nativeQuery = true)
    UUID findTextIDByChoiceID(@Param("choiceId") UUID choiceID);

    @Query(value="UPDATE choice_db SET textid = :textId, updated_at = :updatedAt WHERE choiceid = :choiceId", nativeQuery = true)
    Optional<Choice> saveUpdateTextID(@Param("choiceId") UUID choiceID, @Param("textId") UUID textId, @Param("updatedAt") Timestamp updatedAt);
//
//    Optional<Choice> updateChoiceByTextID(UUID textID, Choice choice);
}
