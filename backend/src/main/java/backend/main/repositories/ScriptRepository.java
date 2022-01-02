package backend.main.repositories;

import java.sql.Timestamp;
import java.util.*;

import backend.main.Pojos.ScriptRequest;
import backend.main.models.Script;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ScriptRepository  extends JpaRepository<Script, UUID> {

    @Query(value="UPDATE script_db SET title = :#{#script.title}, description = :#{#script.description}, updated_at = :updated_at WHERE scriptid = :#{#script.scriptID}", nativeQuery=true)
    Optional<Script> updateScript(@Param("script") ScriptRequest scriptRequest, @Param("updated_at") Timestamp updatedAt);
}
