# MongoDB + Spring 實作

- [MongoDB + Spring 實作](#mongodb--spring-實作)
  - [Docker](#docker)
  - [Maven](#maven)
  - [Java demo](#java-demo)

## Docker

- 拉取 Image

```bash!
docker pull mongo:latest
```

- 執行 docker Image

```bash!
docker run --name mongo-db -p 27017:27017 -d mongo
```

## Maven

- application.properties

```xml!
spring.data.mongodb.uri=mongodb://localhost:27017/mydb
```

- xml

```xml!
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>
```

## Java demo

- Controller

```java
@RestController
@RequestMapping("/mongo/users")
public class MongoUserController {

  @Autowired
  private UserRepository userRepository;

  @GetMapping("/")
  public List<UserDemoEntity> getAllUsers() {
    return userRepository.findAll();
  }

  @PostMapping("/")
  public UserDemoEntity createUser(@RequestBody UserDemoEntity user) {
    return userRepository.save(user);
  }

  @GetMapping("/{id}")
  public ResponseEntity<UserDemoEntity> getUserById(@PathVariable("id") String id) {
    Optional<UserDemoEntity> user = userRepository.findById(id);
    if (user.isPresent()) {
      return new ResponseEntity<>(user.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @PutMapping("/{id}")
  public ResponseEntity<UserDemoEntity> updateUser(@PathVariable("id") String id,
      @RequestBody UserDemoEntity user) {
    Optional<UserDemoEntity> userData = userRepository.findById(id);
    if (userData.isPresent()) {
      UserDemoEntity updatedUser = userData.get();
      updatedUser.setName(user.getName());
      updatedUser.setEmail(user.getEmail());
      userRepository.save(updatedUser);
      return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") String id) {
    try {
      userRepository.deleteById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

```

- Service

```java
@Service
public class MongoUserService {
  @Autowired
  private UserRepository userRepository;

  public UserDemoEntity save(UserDemoEntity user) {
    return userRepository.save(user);
  }

  public List<UserDemoEntity> findByName(String name) {
    return userRepository.findByName(name);
  }
}
```

- Repo

```java
public interface UserRepository extends MongoRepository<UserDemoEntity, String> {

  List<UserDemoEntity> findByName(String name);
}
```
