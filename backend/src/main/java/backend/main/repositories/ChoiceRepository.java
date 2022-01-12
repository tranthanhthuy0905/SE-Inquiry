package backend.main.repositories;
import backend.main.Pojos.ChoiceRequest;
import backend.main.models.Choice;
import backend.main.models.Script;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.*;

@Repository
public interface ChoiceRepository extends JpaRepository<Choice, UUID> {

//    @Query(value="SELECT * FROM choice WHERE :textId IN textid", nativeQuery = true)
//    List<Choice> findByTextID(@Param("textId")UUID textID);

    @Query(value="SELECT * FROM choice WHERE choiceid = :choiceId", nativeQuery = true)
    Optional<Choice> findByChoiceID(@Param("choiceId") UUID choiceID);

    @Query(value="SELECT * FROM choice WHERE content = :content AND script_id = :scriptId", nativeQuery = true)
    Optional<Choice> findByContentAndScriptID(@Param("content") String content, @Param("scriptId") UUID scriptID);

//    @Query(value="SELECT * FROM choice WHERE content = :content AND scriptid = :scriptId AND :textId IN textid", nativeQuery = true)
//    Optional<Choice> findByContentAndID(@Param("content") String content, @Param("textId") UUID textID, @Param("scriptId") UUID scriptID);

//    @Query(value="SELECT textid FROM choice WHERE choiceid=:choiceId", nativeQuery = true)
//    UUID findTextIDByChoiceID(@Param("choiceId") UUID choiceID);

    @Query(value="UPDATE choice SET content = ::#{#choiceRequest.content}, script = :#{#choiceRequest.script}, updated_at = :#{#choiceRequest.updatedAt} WHERE choiceid = :#{#choiceRequest.choiceID}", nativeQuery = true)
    Optional<Choice> saveUpdateChoice(@Param("choiceRequest") Choice choiceRequest);
}
