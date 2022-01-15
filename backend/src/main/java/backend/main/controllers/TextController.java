package backend.main.controllers;

import backend.main.Pojos.*;
import backend.main.models.Text;
import backend.main.repositories.TextRepository;
import backend.main.services.TextService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.*;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("api/v1/text")
public class TextController {
    @Autowired
    private TextRepository textRepository;

    @Autowired
    private TextService textService;

    @RequestMapping(value = "/create", method = RequestMethod.POST,
            consumes = "application/json")
    public ResponseEntity<?> createText(@RequestBody TextRequest text) {
        Text text1 = new Text(text.getTextID(), text.getContent(),text.getTitle());
        return new ResponseEntity<>(textRepository.save(text1),HttpStatus.OK) ;
    }

    @GetMapping()
    public Dictionary getAllTexts(@RequestParam("limit") int limit, @RequestParam("offset") int offset) {
        return textService.findAllTexts(limit, offset);
    }
//
//    @GetMapping("/")
//    public ResponseEntity<?> getAllTextsWithPage(@RequestParam(defaultValue = "0") int page,
//                                                 @RequestParam(defaultValue = "5") int size) {
//        Pageable pageable = PageRequest.of(page,size);
//        return new ResponseEntity<>(textService.findAllWithPage(pageable), HttpStatus.OK) ;
    //}
//    @GetMapping("title")
//    public Optional<Text> getTextByTitle(@RequestBody Text text) {
//        return textService.getTextByTitle(text.getTitle());
//    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "detail/{textId}")
    public Optional<Text> getTextById(@PathVariable("textId") UUID textID) {
        return textService.getTextByTextID(textID);
    }

//    @GetMapping(path = "group/{scriptId}")
//    public List<Text> getTextsByScriptId(@PathVariable("scriptId") UUID scriptID) {
//        return textService.getAllTextsByScriptID(scriptID);
//    }

//    @GetMapping(path="scriptId/{textId}")
//    public UUID getScriptId (@RequestParam("textId") UUID textID) {
//        return textService.getScriptID(textID);
//    }

    @DeleteMapping()
    public String deleteAllTexts() {
        try {
            textRepository.deleteAll();
            return "Deletion all texts done";
        } catch(Exception e) {
            throw e;
        }
    }

//    @PutMapping("update")
//    public Optional<Text> updateText (@RequestBody TextRequest textRequest) {
//        return textService.(choiceRequest);
//    }

    @PutMapping("matchChoice")
    public Text matchChoiceToText(@RequestBody MatchRequest request) {
        return textService.MatchChoiceToText(request.getTextId(), request.getChoiceId());
    }

    @DeleteMapping("/deleteAll")
    public void deleteAllTextChoice() {
        textRepository.deleteAllTextChoice();
    }

}
