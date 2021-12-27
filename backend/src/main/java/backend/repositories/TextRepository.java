package backend.repositories;

import java.sql.Timestamp;
import java.util.*;

import backend.models.Choice;
import backend.models.Text;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TextRepository extends JpaRepository<Text, UUID> {

    List<Text> findTextsByScriptID(UUID scriptID);

    UUID findScriptIDByTextID(UUID textID);

//    Text updateTextById(UUID textID, Text text);
//
//    Text updateTextByScriptID(UUID scriptID, Text text);
}