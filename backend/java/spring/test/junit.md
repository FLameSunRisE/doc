# Junit

- [Junit](#junit)
  - [Spring boot 僅執行 junit 方式](#spring-boot-僅執行-junit-方式)

## Spring boot 僅執行 junit 方式

- 若使用`@SpringBootTest`會導致進行 unit test 會造成時間的浪費,因此修正運行方式

```java
@RunWith(MockitoJUnitRunner.class)
class DateUtilTest {

  @InjectMocks
  private LocalDateUtil timeUtil;

  @BeforeEach
  void setUp() {
    MockitoAnnotations.openMocks(this);
  }

  @Test
  public void testParseDateToStr() {
    LocalDate localDate = LocalDate.parse("2022-01-01");
    DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyyMMdd");
    String parseDateToStr = timeUtil.parseDateToStr(localDate, dateTimeFormatter);
    Assert.assertEquals(parseDateToStr, "20220101");
  }
}
```
