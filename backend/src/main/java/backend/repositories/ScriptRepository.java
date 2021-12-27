package backend.repositories;

import java.sql.Timestamp;
import java.util.*;

import backend.models.Script;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScriptRepository  extends JpaRepository<Script, UUID> {

    //Script saveScriptById(UUID scriptID, Script script);
}
