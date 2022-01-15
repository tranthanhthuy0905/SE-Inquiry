package backend.main.repositories;

import java.util.*;

import backend.main.models.Script;
import backend.main.models.Text;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TextRepository extends JpaRepository<Text, UUID> {

//    @Query(value="SELECT * FROM text WHERE scriptid = :scriptId ORDER BY text.created_at ASC", nativeQuery = true)
//    List<Text> findByScriptID(@Param("scriptId")UUID scriptID);

//    @Query(value="SELECT * FROM text WHERE title = :title", nativeQuery = true)
//    Optional<Text> findTextByTitle(@Param("title") String title);

    @Query(value="DELETE FROM text_choice", nativeQuery = true)
    Void deleteAllTextChoice();

    @Query(value="SELECT * FROM text WHERE title = :title AND script = :script", nativeQuery = true)
    Optional<Text> findByTitleAndScript(@Param("title") String title, @Param("script") Script script);

    @Query(value="SELECT * FROM text WHERE textid = :textId", nativeQuery = true)
    Optional<Text> findByTextID(@Param("textId") UUID textID);

    Page<Text> findAll(Pageable pageable);

    //    @Query(value="SELECT scriptid FROM text WHERE textid=:textId", nativeQuery = true)
//    UUID findScriptIDByTextID(@Param("textId") UUID textID);

//    @Query(value="UPDATE text SET title = :scriptId, updated_at = :updatedAt WHERE textid = :textId", nativeQuery = true)
//    Optional<Text> saveUpdateText(@Param("textUpdate") Text textUpdate);
}