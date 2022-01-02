package backend.repositories;

import java.sql.Timestamp;
import java.util.*;

import backend.Pojos.ScriptRequest;
import backend.models.Script;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ScriptRepository  extends JpaRepository<Script, UUID> {

//    @Query("UPDATE script_db SET title = :#{#script.title}, description = :#{#script.description}, updated_at = :updatedAt WHERE scriptid = :#{#script.scriptID}")
//    Optional<Script> updateScript(@Param("script") ScriptRequest scriptRequest, @Param("updated_at") Timestamp updatedAt);
}
