package backend.repositories;

import java.sql.Timestamp;
import java.util.*;

import backend.models.Choice;
import backend.models.Text;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TextRepository extends JpaRepository<Text, UUID> {

    @Query(value="SELECT * FROM text_db WHERE scriptid = :scriptId", nativeQuery = true)
    List<Text> findByScriptID(@Param("scriptId")UUID scriptID);

    @Query(value="SELECT * FROM text_db WHERE textid = :textId", nativeQuery = true)
    Optional<Text> findByTextID(@Param("textId") UUID textID);

    @Query(value="SELECT scriptid FROM text_db WHERE textid=:textId", nativeQuery = true)
    UUID findScriptIDByTextID(@Param("textId") UUID textID);

    @Query(value="UPDATE text_db SET scriptid = :scriptId, updated_at = :updatedAt WHERE textid = :textId", nativeQuery = true)
    Optional<Text> saveUpdateScriptID(@Param("textId") UUID textID, @Param("scriptId") UUID scriptId, @Param("updatedAt") Timestamp updatedAt);
}