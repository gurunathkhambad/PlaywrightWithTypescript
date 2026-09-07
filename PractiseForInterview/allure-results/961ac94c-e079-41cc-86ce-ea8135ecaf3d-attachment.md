# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CustomDatePickerDualMonth.spec.ts >> Custom Date Picker Dual Month
- Location: tests\CustomDatePickerDualMonth.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button[aria-label=\'Next month\']')

```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - link "Skip to main content" [ref=f1e5] [cursor=pointer]:
    - /url: "#main"
  - generic [ref=f1e7]:
    - banner [ref=f1e22]:
      - generic [ref=f1e23]:
        - navigation [ref=f1e24]:
          - link "Booking.com" [ref=f1e28] [cursor=pointer]:
            - /url: https://www.booking.com/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
          - generic [ref=f1e31]:
            - button "Prices in Indian Rupee, INR" [ref=f1e33] [cursor=pointer]:
              - generic [ref=f1e34]: INR
            - 'button "Language: English (US)" [ref=f1e36] [cursor=pointer]'
            - link "Customer support" [ref=f1e41] [cursor=pointer]:
              - /url: https://secure.booking.com/help.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc&source=header&src=profile_contact_cs
            - link "List your property" [ref=f1e46] [cursor=pointer]:
              - /url: https://join.booking.com/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&lang=en-us&sid=654b1ac92e4f166cd3ad0b201ccec0fc&utm_medium=frontend&utm_source=topbar
            - link "Register an account" [ref=f1e48] [cursor=pointer]:
              - /url: https://account.booking.com/auth/oauth2?client_id=vO1Kblk7xX9tUn2cpZLS&redirect_uri=https%3A%2F%2Fsecure.booking.com%2Flogin.html%3Fop%3Doauth_return&response_type=code&lang=en-us&aid=304142&bkng_action=index&prompt=signin&state=UtcB7a4Nj-vSPUwPVhAHavdQ4WLgvB5LXrz-_B7tbFqxydXv08J5W7PDzSUy7AZDUxSEwlnRTvCc8CJXK2v1R1mOHK_3spFVTr-_NOl38AHqKLRFbTH0rZtmBGexGL-1Oa_DXVNERf4umQBMoZN76Wy63Y1auMPztyP7Et83dllYJcjpS2axPQ95CTC10SWOF-56vuKLzYz8ay_kmVxL0lp1L57qEunjnjNJZJM_Aok2lm3hajicC3mx3Z4a6KgV9iw6VyYOQIQuCSPK3PurqFPnnN616DysjJc%3D*eyJpZCI6InRyYXZlbGxlcl9oZWFkZXIifQ%3D%3D
              - generic [ref=f1e49]: Register
            - link "Sign in" [ref=f1e51] [cursor=pointer]:
              - /url: https://account.booking.com/auth/oauth2?client_id=vO1Kblk7xX9tUn2cpZLS&redirect_uri=https%3A%2F%2Fsecure.booking.com%2Flogin.html%3Fop%3Doauth_return&response_type=code&lang=en-us&aid=304142&bkng_action=index&prompt=signin&state=UtcB7a4Nj-vSPUwPVhAHavdQ4WLgvB5LXrz-_B7tbFqxydXv08J5W7PDzSUy7AZDUxSEwlnRTvCc8CJXK2v1R1mOHK_3spFVTr-_NOl38AHqKLRFbTH0rZtmBGexGL-1Oa_DXVNERf4umQBMoZN76Wy63Y1auMPztyP7Et83dllYJcjpS2axPQ95CTC10SWOF-56vuKLzYz8ay_kmVxL0lp1L57qEunjnjNJZJM_Aok2lm3hajicC3mx3Z4a6KgV9iw6VyYOQIQuCSPK3PurqFPnnN616DysjJc%3D*eyJpZCI6InRyYXZlbGxlcl9oZWFkZXIifQ%3D%3D
        - navigation "What are you looking for?" [ref=f1e53]:
          - menubar [ref=f1e56]:
            - menuitem "Stays" [ref=f1e57] [cursor=pointer]
            - menuitem "Flights" [ref=f1e63] [cursor=pointer]
            - menuitem "Flight + Hotel" [ref=f1e69] [cursor=pointer]
            - menuitem "Car rental" [ref=f1e75] [cursor=pointer]
            - menuitem "Attractions" [ref=f1e81] [cursor=pointer]
            - menuitem "Airport taxis" [ref=f1e87] [cursor=pointer]
    - main [ref=f1e93]:
      - generic [ref=f1e102]:
        - generic [ref=f1e109]:
          - heading "Find your next stay" [level=1] [ref=f1e111]
          - paragraph [ref=f1e113]: Search deals on hotels, homes, and much more...
        - region "Search properties" [ref=f1e118]:
          - generic [ref=f1e119]:
            - generic [ref=f1e128]:
              - generic [ref=f1e129]: Enter destination
              - combobox "Enter destination" [ref=f1e133]
            - generic [ref=f1e135]:
              - button "Select dates Check-in date — Check-out date" [expanded] [ref=f1e136] [cursor=pointer]:
                - generic [ref=f1e141]:
                  - generic [ref=f1e142]: Select dates
                  - generic [ref=f1e143]: Check-in date — Check-out date
              - generic [ref=f1e145]:
                - tablist [ref=f1e147]:
                  - tab "Calendar" [selected] [ref=f1e148] [cursor=pointer]
                  - tab "I'm flexible" [ref=f1e151] [cursor=pointer]
                - tabpanel "Calendar" [ref=f1e154]:
                  - generic [ref=f1e155]:
                    - generic [active] [ref=f1e156]:
                      - button "Previous month" [ref=f1e157] [cursor=pointer]
                      - generic [ref=f1e162]:
                        - generic [ref=f1e163]:
                          - heading "November 2027" [level=3] [ref=f1e164]
                          - grid "November 2027" [ref=f1e165]:
                            - rowgroup [ref=f1e166]:
                              - row [ref=f1e167]:
                                - columnheader [ref=f1e168]:
                                  - generic [ref=f1e169]: Sun
                                - columnheader [ref=f1e170]:
                                  - generic [ref=f1e171]: Mon
                                - columnheader [ref=f1e172]:
                                  - generic [ref=f1e173]: Tue
                                - columnheader [ref=f1e174]:
                                  - generic [ref=f1e175]: Wed
                                - columnheader [ref=f1e176]:
                                  - generic [ref=f1e177]: Thu
                                - columnheader [ref=f1e178]:
                                  - generic [ref=f1e179]: Fri
                                - columnheader [ref=f1e180]:
                                  - generic [ref=f1e181]: Sat
                            - rowgroup [ref=f1e182]:
                              - row [ref=f1e183]:
                                - gridcell [ref=f1e184]
                                - gridcell "Monday, November 1, 2027" [ref=f1e185]:
                                  - checkbox "Monday, November 1, 2027" [ref=f1e186] [cursor=pointer]:
                                    - generic [ref=f1e187]: "1"
                                - gridcell "Tuesday, November 2, 2027" [ref=f1e188]:
                                  - checkbox "Tuesday, November 2, 2027" [ref=f1e189] [cursor=pointer]:
                                    - generic [ref=f1e190]: "2"
                                - gridcell "Wednesday, November 3, 2027" [ref=f1e191]:
                                  - checkbox "Wednesday, November 3, 2027" [ref=f1e192] [cursor=pointer]:
                                    - generic [ref=f1e193]: "3"
                                - gridcell "Thursday, November 4, 2027" [ref=f1e194]:
                                  - checkbox "Thursday, November 4, 2027" [ref=f1e195] [cursor=pointer]:
                                    - generic [ref=f1e196]: "4"
                                - gridcell "Friday, November 5, 2027" [ref=f1e197]:
                                  - checkbox "Friday, November 5, 2027" [ref=f1e198] [cursor=pointer]:
                                    - generic [ref=f1e199]: "5"
                                - gridcell "Saturday, November 6, 2027" [ref=f1e200]:
                                  - checkbox "Saturday, November 6, 2027" [ref=f1e201] [cursor=pointer]:
                                    - generic [ref=f1e202]: "6"
                              - row [ref=f1e203]:
                                - gridcell "Sunday, November 7, 2027" [ref=f1e204]:
                                  - checkbox "Sunday, November 7, 2027" [ref=f1e205] [cursor=pointer]:
                                    - generic [ref=f1e206]: "7"
                                - gridcell "Monday, November 8, 2027" [ref=f1e207]:
                                  - checkbox "Monday, November 8, 2027" [ref=f1e208] [cursor=pointer]:
                                    - generic [ref=f1e209]: "8"
                                - gridcell "Tuesday, November 9, 2027" [ref=f1e210]:
                                  - checkbox "Tuesday, November 9, 2027" [ref=f1e211] [cursor=pointer]:
                                    - generic [ref=f1e212]: "9"
                                - gridcell "Wednesday, November 10, 2027" [ref=f1e213]:
                                  - checkbox "Wednesday, November 10, 2027" [ref=f1e214] [cursor=pointer]:
                                    - generic [ref=f1e215]: "10"
                                - gridcell "Thursday, November 11, 2027" [ref=f1e216]:
                                  - checkbox "Thursday, November 11, 2027" [ref=f1e217] [cursor=pointer]:
                                    - generic [ref=f1e218]: "11"
                                - gridcell "Friday, November 12, 2027" [ref=f1e219]:
                                  - checkbox "Friday, November 12, 2027" [ref=f1e220] [cursor=pointer]:
                                    - generic [ref=f1e221]: "12"
                                - gridcell "Saturday, November 13, 2027" [ref=f1e222]:
                                  - checkbox "Saturday, November 13, 2027" [ref=f1e223] [cursor=pointer]:
                                    - generic [ref=f1e224]: "13"
                              - row [ref=f1e225]:
                                - gridcell "Sunday, November 14, 2027" [ref=f1e226]:
                                  - checkbox "Sunday, November 14, 2027" [ref=f1e227] [cursor=pointer]:
                                    - generic [ref=f1e228]: "14"
                                - gridcell "Monday, November 15, 2027" [ref=f1e229]:
                                  - checkbox "Monday, November 15, 2027" [ref=f1e230] [cursor=pointer]:
                                    - generic [ref=f1e231]: "15"
                                - gridcell "Tuesday, November 16, 2027" [ref=f1e232]:
                                  - checkbox "Tuesday, November 16, 2027" [ref=f1e233] [cursor=pointer]:
                                    - generic [ref=f1e234]: "16"
                                - gridcell "Wednesday, November 17, 2027" [ref=f1e235]:
                                  - checkbox "Wednesday, November 17, 2027" [ref=f1e236] [cursor=pointer]:
                                    - generic [ref=f1e237]: "17"
                                - gridcell "Thursday, November 18, 2027" [ref=f1e238]:
                                  - checkbox "Thursday, November 18, 2027" [ref=f1e239] [cursor=pointer]:
                                    - generic [ref=f1e240]: "18"
                                - gridcell "Friday, November 19, 2027" [ref=f1e241]:
                                  - checkbox "Friday, November 19, 2027" [ref=f1e242] [cursor=pointer]:
                                    - generic [ref=f1e243]: "19"
                                - gridcell "Saturday, November 20, 2027" [ref=f1e244]:
                                  - checkbox "Saturday, November 20, 2027" [ref=f1e245] [cursor=pointer]:
                                    - generic [ref=f1e246]: "20"
                              - row [ref=f1e247]:
                                - gridcell "Sunday, November 21, 2027" [ref=f1e248]:
                                  - checkbox "Sunday, November 21, 2027" [ref=f1e249] [cursor=pointer]:
                                    - generic [ref=f1e250]: "21"
                                - gridcell "Monday, November 22, 2027" [ref=f1e251]:
                                  - checkbox "Monday, November 22, 2027" [ref=f1e252] [cursor=pointer]:
                                    - generic [ref=f1e253]: "22"
                                - gridcell "Tuesday, November 23, 2027" [ref=f1e254]:
                                  - checkbox "Tuesday, November 23, 2027" [ref=f1e255] [cursor=pointer]:
                                    - generic [ref=f1e256]: "23"
                                - gridcell "Wednesday, November 24, 2027" [ref=f1e257]:
                                  - checkbox "Wednesday, November 24, 2027" [ref=f1e258] [cursor=pointer]:
                                    - generic [ref=f1e259]: "24"
                                - gridcell "Thursday, November 25, 2027" [ref=f1e260]:
                                  - checkbox "Thursday, November 25, 2027" [ref=f1e261] [cursor=pointer]:
                                    - generic [ref=f1e262]: "25"
                                - gridcell "Friday, November 26, 2027" [ref=f1e263]:
                                  - checkbox "Friday, November 26, 2027" [ref=f1e264] [cursor=pointer]:
                                    - generic [ref=f1e265]: "26"
                                - gridcell "Saturday, November 27, 2027" [ref=f1e266]:
                                  - checkbox "Saturday, November 27, 2027" [ref=f1e267] [cursor=pointer]:
                                    - generic [ref=f1e268]: "27"
                              - row [ref=f1e269]:
                                - gridcell "Sunday, November 28, 2027" [ref=f1e270]:
                                  - checkbox "Sunday, November 28, 2027" [ref=f1e271] [cursor=pointer]:
                                    - generic [ref=f1e272]: "28"
                                - gridcell "Monday, November 29, 2027" [ref=f1e273]:
                                  - checkbox "Monday, November 29, 2027" [ref=f1e274] [cursor=pointer]:
                                    - generic [ref=f1e275]: "29"
                                - gridcell "Tuesday, November 30, 2027" [ref=f1e276]:
                                  - checkbox "Tuesday, November 30, 2027" [ref=f1e277] [cursor=pointer]:
                                    - generic [ref=f1e278]: "30"
                                - gridcell [ref=f1e279]
                                - gridcell [ref=f1e280]
                                - gridcell [ref=f1e281]
                                - gridcell [ref=f1e282]
                        - generic [ref=f1e283]:
                          - heading "December 2027" [level=3] [ref=f1e284]
                          - grid "December 2027" [ref=f1e285]:
                            - rowgroup [ref=f1e286]:
                              - row [ref=f1e287]:
                                - columnheader [ref=f1e288]:
                                  - generic [ref=f1e289]: Sun
                                - columnheader [ref=f1e290]:
                                  - generic [ref=f1e291]: Mon
                                - columnheader [ref=f1e292]:
                                  - generic [ref=f1e293]: Tue
                                - columnheader [ref=f1e294]:
                                  - generic [ref=f1e295]: Wed
                                - columnheader [ref=f1e296]:
                                  - generic [ref=f1e297]: Thu
                                - columnheader [ref=f1e298]:
                                  - generic [ref=f1e299]: Fri
                                - columnheader [ref=f1e300]:
                                  - generic [ref=f1e301]: Sat
                            - rowgroup [ref=f1e302]:
                              - row [ref=f1e303]:
                                - gridcell [ref=f1e304]
                                - gridcell [ref=f1e305]
                                - gridcell [ref=f1e306]
                                - gridcell "Wednesday, December 1, 2027" [ref=f1e307]:
                                  - checkbox "Wednesday, December 1, 2027" [ref=f1e308] [cursor=pointer]:
                                    - generic [ref=f1e309]: "1"
                                - gridcell "Thursday, December 2, 2027" [ref=f1e310]:
                                  - checkbox "Thursday, December 2, 2027" [ref=f1e311] [cursor=pointer]:
                                    - generic [ref=f1e312]: "2"
                                - gridcell "Friday, December 3, 2027" [ref=f1e313]:
                                  - checkbox "Friday, December 3, 2027" [ref=f1e314] [cursor=pointer]:
                                    - generic [ref=f1e315]: "3"
                                - gridcell "Saturday, December 4, 2027" [ref=f1e316]:
                                  - checkbox "Saturday, December 4, 2027" [ref=f1e317] [cursor=pointer]:
                                    - generic [ref=f1e318]: "4"
                              - row [ref=f1e319]:
                                - gridcell "Sunday, December 5, 2027" [ref=f1e320]:
                                  - checkbox "Sunday, December 5, 2027" [ref=f1e321] [cursor=pointer]:
                                    - generic [ref=f1e322]: "5"
                                - gridcell "Monday, December 6, 2027" [ref=f1e323]:
                                  - checkbox "Monday, December 6, 2027" [ref=f1e324] [cursor=pointer]:
                                    - generic [ref=f1e325]: "6"
                                - gridcell "Tuesday, December 7, 2027" [ref=f1e326]:
                                  - checkbox "Tuesday, December 7, 2027" [ref=f1e327] [cursor=pointer]:
                                    - generic [ref=f1e328]: "7"
                                - gridcell "Wednesday, December 8, 2027" [ref=f1e329]:
                                  - checkbox "Wednesday, December 8, 2027" [ref=f1e330] [cursor=pointer]:
                                    - generic [ref=f1e331]: "8"
                                - gridcell "Thursday, December 9, 2027" [ref=f1e332]:
                                  - checkbox "Thursday, December 9, 2027" [ref=f1e333] [cursor=pointer]:
                                    - generic [ref=f1e334]: "9"
                                - gridcell "Friday, December 10, 2027" [ref=f1e335]:
                                  - checkbox "Friday, December 10, 2027" [ref=f1e336] [cursor=pointer]:
                                    - generic [ref=f1e337]: "10"
                                - gridcell "Saturday, December 11, 2027" [ref=f1e338]:
                                  - checkbox "Saturday, December 11, 2027" [ref=f1e339] [cursor=pointer]:
                                    - generic [ref=f1e340]: "11"
                              - row [ref=f1e341]:
                                - gridcell "Sunday, December 12, 2027" [ref=f1e342]:
                                  - checkbox "Sunday, December 12, 2027" [ref=f1e343] [cursor=pointer]:
                                    - generic [ref=f1e344]: "12"
                                - gridcell "Monday, December 13, 2027" [ref=f1e345]:
                                  - checkbox "Monday, December 13, 2027" [ref=f1e346] [cursor=pointer]:
                                    - generic [ref=f1e347]: "13"
                                - gridcell "Tuesday, December 14, 2027" [ref=f1e348]:
                                  - checkbox "Tuesday, December 14, 2027" [ref=f1e349] [cursor=pointer]:
                                    - generic [ref=f1e350]: "14"
                                - gridcell "Wednesday, December 15, 2027" [ref=f1e351]:
                                  - checkbox "Wednesday, December 15, 2027" [ref=f1e352] [cursor=pointer]:
                                    - generic [ref=f1e353]: "15"
                                - gridcell "Thursday, December 16, 2027" [ref=f1e354]:
                                  - checkbox "Thursday, December 16, 2027" [ref=f1e355] [cursor=pointer]:
                                    - generic [ref=f1e356]: "16"
                                - gridcell "Friday, December 17, 2027" [ref=f1e357]:
                                  - checkbox "Friday, December 17, 2027" [ref=f1e358] [cursor=pointer]:
                                    - generic [ref=f1e359]: "17"
                                - gridcell "Saturday, December 18, 2027" [ref=f1e360]:
                                  - checkbox "Saturday, December 18, 2027" [ref=f1e361] [cursor=pointer]:
                                    - generic [ref=f1e362]: "18"
                              - row [ref=f1e363]:
                                - gridcell "Sunday, December 19, 2027" [ref=f1e364]:
                                  - checkbox "Sunday, December 19, 2027" [ref=f1e365] [cursor=pointer]:
                                    - generic [ref=f1e366]: "19"
                                - gridcell "Monday, December 20, 2027" [ref=f1e367]:
                                  - checkbox "Monday, December 20, 2027" [ref=f1e368] [cursor=pointer]:
                                    - generic [ref=f1e369]: "20"
                                - gridcell "Tuesday, December 21, 2027" [ref=f1e370]:
                                  - checkbox "Tuesday, December 21, 2027" [ref=f1e371] [cursor=pointer]:
                                    - generic [ref=f1e372]: "21"
                                - gridcell "Wednesday, December 22, 2027" [ref=f1e373]:
                                  - checkbox "Wednesday, December 22, 2027" [ref=f1e374] [cursor=pointer]:
                                    - generic [ref=f1e375]: "22"
                                - gridcell "Thursday, December 23, 2027" [ref=f1e376]:
                                  - checkbox "Thursday, December 23, 2027" [ref=f1e377] [cursor=pointer]:
                                    - generic [ref=f1e378]: "23"
                                - gridcell "Friday, December 24, 2027" [ref=f1e379]:
                                  - checkbox "Friday, December 24, 2027" [ref=f1e380] [cursor=pointer]:
                                    - generic [ref=f1e381]: "24"
                                - gridcell "Saturday, December 25, 2027" [ref=f1e382]:
                                  - checkbox "Saturday, December 25, 2027" [ref=f1e383] [cursor=pointer]:
                                    - generic [ref=f1e384]: "25"
                              - row [ref=f1e385]:
                                - gridcell "Sunday, December 26, 2027" [ref=f1e386]:
                                  - checkbox "Sunday, December 26, 2027" [ref=f1e387] [cursor=pointer]:
                                    - generic [ref=f1e388]: "26"
                                - gridcell "Monday, December 27, 2027" [ref=f1e389]:
                                  - checkbox "Monday, December 27, 2027" [ref=f1e390] [cursor=pointer]:
                                    - generic [ref=f1e391]: "27"
                                - gridcell "Tuesday, December 28, 2027" [ref=f1e392]:
                                  - checkbox "Tuesday, December 28, 2027" [ref=f1e393] [cursor=pointer]:
                                    - generic [ref=f1e394]: "28"
                                - gridcell "Wednesday, December 29, 2027" [ref=f1e395]:
                                  - checkbox "Wednesday, December 29, 2027" [ref=f1e396] [cursor=pointer]:
                                    - generic [ref=f1e397]: "29"
                                - gridcell "Thursday, December 30, 2027" [ref=f1e398]:
                                  - checkbox "Thursday, December 30, 2027" [ref=f1e399] [cursor=pointer]:
                                    - generic [ref=f1e400]: "30"
                                - gridcell "Friday, December 31, 2027" [ref=f1e401]:
                                  - checkbox "Friday, December 31, 2027" [ref=f1e402] [cursor=pointer]:
                                    - generic [ref=f1e403]: "31"
                                - gridcell [ref=f1e404]
                    - radiogroup "Flexible date options" [ref=f1e407]:
                      - region [ref=f1e410]:
                        - group [ref=f1e411]:
                          - generic [ref=f1e412]:
                            - radio "Exact dates" [checked] [ref=f1e413]
                            - generic [ref=f1e414] [cursor=pointer]: Exact dates
                        - group [ref=f1e416]:
                          - generic "Include dates 1 day before or after selected dates" [ref=f1e417]:
                            - radio "Include dates 1 day before or after selected dates" [ref=f1e418]
                            - generic [ref=f1e419] [cursor=pointer]: 1 day
                        - group [ref=f1e425]:
                          - generic "Include dates 2 days before or after selected dates" [ref=f1e426]:
                            - radio "Include dates 2 days before or after selected dates" [ref=f1e427]
                            - generic [ref=f1e428] [cursor=pointer]: 2 days
                        - group [ref=f1e434]:
                          - generic "Include dates 3 days before or after selected dates" [ref=f1e435]:
                            - radio "Include dates 3 days before or after selected dates" [ref=f1e436]
                            - generic [ref=f1e437] [cursor=pointer]: 3 days
                        - group [ref=f1e443]:
                          - generic "Include dates 7 days before or after selected dates" [ref=f1e444]:
                            - radio "Include dates 7 days before or after selected dates" [ref=f1e445]
                            - generic [ref=f1e446] [cursor=pointer]: 7 days
            - generic [ref=f1e457] [cursor=pointer]:
              - generic [ref=f1e458]: Select occupancy
              - 'button "Number of travelers and rooms. Currently selected: 2 adults · 0 children · 1 room" [ref=f1e460]':
                - generic [ref=f1e461]: 2 adults · 0 children · 1 room
            - button "Search" [ref=f1e467] [cursor=pointer]
          - group [ref=f1e469]:
            - generic [ref=f1e470]:
              - checkbox "I'm traveling for work" [ref=f1e471]
              - generic [ref=f1e472] [cursor=pointer]: I'm traveling for work
            - generic [ref=f1e479]:
              - checkbox "Add flights to my search" [ref=f1e480]
              - generic [ref=f1e481] [cursor=pointer]: Add flights to my search
      - generic [ref=f1e492]:
        - generic [ref=f1e500]:
          - heading "Why Booking.com?" [level=2] [ref=f1e502]
          - generic [ref=f1e503]:
            - heading "Book now, pay at the property" [level=3] [ref=f1e505]
            - paragraph [ref=f1e506]: FREE cancellation on most rooms
          - generic [ref=f1e507]:
            - heading "300M+ reviews from fellow travelers" [level=3] [ref=f1e509]
            - paragraph [ref=f1e510]: Get trusted information from guests like you
          - generic [ref=f1e511]:
            - heading "2+ million properties worldwide" [level=3] [ref=f1e513]
            - paragraph [ref=f1e514]: Hotels, guest houses, apartments, and more…
          - generic [ref=f1e515]:
            - heading "Trusted 24/7 customer service you can rely on" [level=3] [ref=f1e517]
            - paragraph [ref=f1e518]: We're always here to help
        - generic [ref=f1e526]:
          - generic [ref=f1e527]:
            - heading "Offers" [level=2] [ref=f1e528]
            - generic [ref=f1e529]: Promotions, deals, and special offers for you
          - region "Offers" [ref=f1e532]:
            - group [ref=f1e533]:
              - generic [ref=f1e537]:
                - generic [ref=f1e539]:
                  - generic [ref=f1e540]: Late Escape Deal
                  - heading "15% or more off end-of-year stays" [level=3] [ref=f1e541]
                  - generic [ref=f1e542]: Get away for less with Late Escape Deals. Book by Jan 7, 2027 for stays between Oct 1, 2026 and Jan 7, 2027.
                  - link "Search deals – Search stays with at least 15% savings" [ref=f1e545] [cursor=pointer]:
                    - /url: https://www.booking.com/dealspage.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&campaign_id=late_escape
                    - generic [ref=f1e546]: Search deals
                - img "Luxury cliffside resort with an infinity pool overlooking the ocean." [ref=f1e550]
            - group [ref=f1e551]:
              - generic [ref=f1e555]:
                - generic [ref=f1e557]:
                  - generic [ref=f1e558]: Escape for less with our Getaway Deals
                  - heading "No catch. Just getaways." [level=3] [ref=f1e559]
                  - generic [ref=f1e560]: At least 15% off select stays worldwide – just book and go.
                  - link "Save with a Getaway Deal - Save on your next trip with at least 15% off select stays" [ref=f1e563] [cursor=pointer]:
                    - /url: https://www.booking.com/dealspage.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&campaign_id=getaway
                    - generic [ref=f1e564]: Save with a Getaway Deal
                - img "A beach scene in Maui, Hawaii, with travelers walking and relaxing by the ocean on a sunny day." [ref=f1e568]
        - generic [ref=f1e577]:
          - generic [ref=f1e583]:
            - heading "Browse by property type" [level=2] [ref=f1e588]
            - generic [ref=f1e589]:
              - region "Browse by property type" [ref=f1e590]:
                - group [ref=f1e591]:
                  - link "Hotels" [ref=f1e592] [cursor=pointer]:
                    - /url: https://www.booking.com/hotel/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Hotels" [level=3] [ref=f1e597]
                - group [ref=f1e598]:
                  - link "Apartments" [ref=f1e599] [cursor=pointer]:
                    - /url: https://www.booking.com/apartments/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Apartments" [level=3] [ref=f1e604]
                - group [ref=f1e605]:
                  - link "Resorts" [ref=f1e606] [cursor=pointer]:
                    - /url: https://www.booking.com/resorts/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Resorts" [level=3] [ref=f1e611]
                - group [ref=f1e612]:
                  - link "Villas" [ref=f1e613] [cursor=pointer]:
                    - /url: https://www.booking.com/villas/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Villas" [level=3] [ref=f1e618]
                - group [ref=f1e619]:
                  - link "Cabins" [ref=f1e620] [cursor=pointer]:
                    - /url: https://www.booking.com/chalet/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Cabins" [level=3] [ref=f1e625]
                - group [ref=f1e626]:
                  - link "Cottages" [ref=f1e627] [cursor=pointer]:
                    - /url: https://www.booking.com/cottages/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Cottages" [level=3] [ref=f1e632]
                - group [ref=f1e633]:
                  - link "Glamping Sites" [ref=f1e634] [cursor=pointer]:
                    - /url: https://www.booking.com/glamping/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Glamping Sites" [level=3] [ref=f1e639]
                - group [ref=f1e640]:
                  - link "Serviced apartments" [ref=f1e641] [cursor=pointer]:
                    - /url: https://www.booking.com/aparthotels/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Serviced apartments" [level=3] [ref=f1e646]
                - group [ref=f1e647]:
                  - link "Vacation Homes" [ref=f1e648] [cursor=pointer]:
                    - /url: https://www.booking.com/holiday-homes/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Vacation Homes" [level=3] [ref=f1e653]
                - group [ref=f1e654]:
                  - link "Guest Houses" [ref=f1e655] [cursor=pointer]:
                    - /url: https://www.booking.com/guest-house/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Guest Houses" [level=3] [ref=f1e660]
                - group [ref=f1e661]:
                  - link "Hostels" [ref=f1e662] [cursor=pointer]:
                    - /url: https://www.booking.com/hostels/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Hostels" [level=3] [ref=f1e667]
                - group [ref=f1e668]:
                  - link "Motels" [ref=f1e669] [cursor=pointer]:
                    - /url: https://www.booking.com/motels/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Motels" [level=3] [ref=f1e674]
                - group [ref=f1e675]:
                  - link "B&Bs" [ref=f1e676] [cursor=pointer]:
                    - /url: https://www.booking.com/bed-and-breakfast/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "B&Bs" [level=3] [ref=f1e681]
                - group [ref=f1e682]:
                  - link "Ryokans" [ref=f1e683] [cursor=pointer]:
                    - /url: https://www.booking.com/ryokans/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Ryokans" [level=3] [ref=f1e688]
                - group [ref=f1e689]:
                  - link "Riads" [ref=f1e690] [cursor=pointer]:
                    - /url: https://www.booking.com/riad/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Riads" [level=3] [ref=f1e695]
                - group [ref=f1e696]:
                  - link "Resort Villages" [ref=f1e697] [cursor=pointer]:
                    - /url: https://www.booking.com/holiday-parks/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Resort Villages" [level=3] [ref=f1e702]
                - group [ref=f1e703]:
                  - link "Homestays" [ref=f1e704] [cursor=pointer]:
                    - /url: https://www.booking.com/homestay/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Homestays" [level=3] [ref=f1e709]
                - group [ref=f1e710]:
                  - link "Campgrounds" [ref=f1e711] [cursor=pointer]:
                    - /url: https://www.booking.com/campings/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Campgrounds" [level=3] [ref=f1e716]
                - group [ref=f1e717]:
                  - link "Country Houses" [ref=f1e718] [cursor=pointer]:
                    - /url: https://www.booking.com/country-houses/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Country Houses" [level=3] [ref=f1e723]
                - group [ref=f1e724]:
                  - link "Farm stays" [ref=f1e725] [cursor=pointer]:
                    - /url: https://www.booking.com/farm-holidays/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Farm stays" [level=3] [ref=f1e730]
                - group [ref=f1e731]:
                  - link "Boats" [ref=f1e732] [cursor=pointer]:
                    - /url: https://www.booking.com/boats/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Boats" [level=3] [ref=f1e737]
                - group [ref=f1e738]:
                  - link "Luxury Tents" [ref=f1e739] [cursor=pointer]:
                    - /url: https://www.booking.com/camp/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Luxury Tents" [level=3] [ref=f1e744]
                - group [ref=f1e745]:
                  - link "Self-Catering Accommodations" [ref=f1e746] [cursor=pointer]:
                    - /url: https://www.booking.com/self-catering/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Self-Catering Accommodations" [level=3] [ref=f1e751]
                - group [ref=f1e752]:
                  - link "Tiny Houses" [ref=f1e753] [cursor=pointer]:
                    - /url: https://www.booking.com/tiny-house/index.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                    - heading "Tiny Houses" [level=3] [ref=f1e758]
              - 'button "Next: Browse by property type" [ref=f1e759] [cursor=pointer]'
          - generic [ref=f1e768]:
            - generic [ref=f1e772]:
              - heading "Looking for a beach trip?" [level=2] [ref=f1e773]
              - generic [ref=f1e774]: Explore beaches, flights, and more to start planning
            - generic [ref=f1e775]:
              - region "Looking for a beach trip?" [ref=f1e776]:
                - group [ref=f1e777]:
                  - link "Mediterranean Europe Greek Islands • Majorca • Sicily and more" [ref=f1e778] [cursor=pointer]:
                    - /url: /explore.en-us.html?sre=trip%2Cdestination_id%2C1&sre=trip%2Cdestination_type%2Cregion&sre=trip%2Cis_macro_region%2Ctrue&sre=trip%2Ctrip_theme%2CBEACH&sre=trip%2Cstart_date%2C2026-09-07&sre=trip%2Cend_date%2C2026-09-08&sre=trip%2Cnumber_of_adults%2C2&sre=trip%2Cnumber_of_rooms%2C1&chal_t=1788756095190&force_referer=
                    - generic [ref=f1e782]:
                      - heading "Mediterranean Europe" [level=3] [ref=f1e783]
                      - generic [ref=f1e784]: Greek Islands • Majorca • Sicily and more
                - group [ref=f1e785]:
                  - link "Atlantic Islands and Coast Tenerife • Madeira Archipelago • Cape Verde and more" [ref=f1e786] [cursor=pointer]:
                    - /url: /explore.en-us.html?sre=trip%2Cdestination_id%2C2&sre=trip%2Cdestination_type%2Cregion&sre=trip%2Cis_macro_region%2Ctrue&sre=trip%2Ctrip_theme%2CBEACH&sre=trip%2Cstart_date%2C2026-09-07&sre=trip%2Cend_date%2C2026-09-08&sre=trip%2Cnumber_of_adults%2C2&sre=trip%2Cnumber_of_rooms%2C1&chal_t=1788756095190&force_referer=
                    - generic [ref=f1e790]:
                      - heading "Atlantic Islands and Coast" [level=3] [ref=f1e791]
                      - generic [ref=f1e792]: Tenerife • Madeira Archipelago • Cape Verde and more
                - group [ref=f1e793]:
                  - link "Southeast Asia Bali • Phuket Province • Boracay Island and more" [ref=f1e794] [cursor=pointer]:
                    - /url: /explore.en-us.html?sre=trip%2Cdestination_id%2C3&sre=trip%2Cdestination_type%2Cregion&sre=trip%2Cis_macro_region%2Ctrue&sre=trip%2Ctrip_theme%2CBEACH&sre=trip%2Cstart_date%2C2026-09-07&sre=trip%2Cend_date%2C2026-09-08&sre=trip%2Cnumber_of_adults%2C2&sre=trip%2Cnumber_of_rooms%2C1&chal_t=1788756095190&force_referer=
                    - generic [ref=f1e798]:
                      - heading "Southeast Asia" [level=3] [ref=f1e799]
                      - generic [ref=f1e800]: Bali • Phuket Province • Boracay Island and more
                - group [ref=f1e801]:
                  - link "Indian Ocean Islands Maldives • Mauritius • Seychelles and more" [ref=f1e802] [cursor=pointer]:
                    - /url: /explore.en-us.html?sre=trip%2Cdestination_id%2C4&sre=trip%2Cdestination_type%2Cregion&sre=trip%2Cis_macro_region%2Ctrue&sre=trip%2Ctrip_theme%2CBEACH&sre=trip%2Cstart_date%2C2026-09-07&sre=trip%2Cend_date%2C2026-09-08&sre=trip%2Cnumber_of_adults%2C2&sre=trip%2Cnumber_of_rooms%2C1&chal_t=1788756095190&force_referer=
                    - generic [ref=f1e806]:
                      - heading "Indian Ocean Islands" [level=3] [ref=f1e807]
                      - generic [ref=f1e808]: Maldives • Mauritius • Seychelles and more
                - group [ref=f1e809]:
                  - link "Caribbean Bahamas • Jamaica • Aruba and more" [ref=f1e810] [cursor=pointer]:
                    - /url: /explore.en-us.html?sre=trip%2Cdestination_id%2C5&sre=trip%2Cdestination_type%2Cregion&sre=trip%2Cis_macro_region%2Ctrue&sre=trip%2Ctrip_theme%2CBEACH&sre=trip%2Cstart_date%2C2026-09-07&sre=trip%2Cend_date%2C2026-09-08&sre=trip%2Cnumber_of_adults%2C2&sre=trip%2Cnumber_of_rooms%2C1&chal_t=1788756095190&force_referer=
                    - generic [ref=f1e814]:
                      - heading "Caribbean" [level=3] [ref=f1e815]
                      - generic [ref=f1e816]: Bahamas • Jamaica • Aruba and more
                - group [ref=f1e817]:
                  - link "Central America Costa Rica • Belize • Mexico and more" [ref=f1e818] [cursor=pointer]:
                    - /url: /explore.en-us.html?sre=trip%2Cdestination_id%2C6&sre=trip%2Cdestination_type%2Cregion&sre=trip%2Cis_macro_region%2Ctrue&sre=trip%2Ctrip_theme%2CBEACH&sre=trip%2Cstart_date%2C2026-09-07&sre=trip%2Cend_date%2C2026-09-08&sre=trip%2Cnumber_of_adults%2C2&sre=trip%2Cnumber_of_rooms%2C1&chal_t=1788756095190&force_referer=
                    - generic [ref=f1e822]:
                      - heading "Central America" [level=3] [ref=f1e823]
                      - generic [ref=f1e824]: Costa Rica • Belize • Mexico and more
                - group [ref=f1e825]:
                  - link "Oceania and the Pacific Islands Bora Bora • Fiji • French Polynesia and more" [ref=f1e826] [cursor=pointer]:
                    - /url: /explore.en-us.html?sre=trip%2Cdestination_id%2C7&sre=trip%2Cdestination_type%2Cregion&sre=trip%2Cis_macro_region%2Ctrue&sre=trip%2Ctrip_theme%2CBEACH&sre=trip%2Cstart_date%2C2026-09-07&sre=trip%2Cend_date%2C2026-09-08&sre=trip%2Cnumber_of_adults%2C2&sre=trip%2Cnumber_of_rooms%2C1&chal_t=1788756095190&force_referer=
                    - generic [ref=f1e830]:
                      - heading "Oceania and the Pacific Islands" [level=3] [ref=f1e831]
                      - generic [ref=f1e832]: Bora Bora • Fiji • French Polynesia and more
              - 'button "Next: Looking for a beach trip?" [ref=f1e833] [cursor=pointer]'
          - generic [ref=f1e843]:
            - generic [ref=f1e845]:
              - heading "Homes guests love" [level=2] [ref=f1e848]
              - link "Discover homes" [ref=f1e851] [cursor=pointer]:
                - /url: https://www.booking.com/booking-home/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
            - generic [ref=f1e853]:
              - region "Homes guests love" [ref=f1e854]:
                - group [ref=f1e855]:
                  - link "Save NĒRO Boutique Hotel to a trip list NĒRO Boutique Hotel Greece, Imerovigli 9.7 Exceptional Starting from Price ₹ 61,014" [ref=f1e856] [cursor=pointer]:
                    - /url: https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&dest_id=1754883&dest_type=hotel&nflt=ht_id%3D201%3Bht_id%3D213%3Bht_id%3D219%3Bht_id%3D220%3Bht_id%3D228%3Bht_id%3D229%3Bht_id%3D230%3Bht_id%3D232%3Bht_id%3D208%3Bht_id%3D209%3Bht_id%3D210%3Bht_id%3D212%3Bht_id%3D214%3Bht_id%3D215%3Bht_id%3D216%3Bht_id%3D222%3Bht_id%3D223%3Bht_id%3D224%3Bht_id%3D227&highlighted_hotels=1754883
                    - generic [ref=f1e857]:
                      - button "Save NĒRO Boutique Hotel to a trip list" [ref=f1e865]
                      - generic [ref=f1e871]:
                        - generic [ref=f1e872]:
                          - generic [ref=f1e873]:
                            - heading "NĒRO Boutique Hotel" [level=3] [ref=f1e874]
                            - generic [ref=f1e875]: Greece, Imerovigli
                          - generic [ref=f1e878]:
                            - generic [ref=f1e879]: "9.7"
                            - generic [ref=f1e880]: "9.7"
                            - generic [ref=f1e881]: Exceptional
                            - generic [ref=f1e882]:
                              - generic [ref=f1e883]: Exceptional
                              - generic [ref=f1e884]: 148 reviews
                        - generic [ref=f1e887]:
                          - generic [ref=f1e888]: Starting from
                          - generic [ref=f1e889]: ₹ 61,014
                          - generic [ref=f1e891]: Price ₹ 61,014
                - group [ref=f1e892]:
                  - link "Save Romance al Colosseo to a trip list Romance al Colosseo Rione Monti, Italy, Rome 9.6 Exceptional Starting from Price ₹ 51,096" [ref=f1e893] [cursor=pointer]:
                    - /url: https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&dest_id=1232235&dest_type=hotel&nflt=ht_id%3D201%3Bht_id%3D213%3Bht_id%3D219%3Bht_id%3D220%3Bht_id%3D228%3Bht_id%3D229%3Bht_id%3D230%3Bht_id%3D232%3Bht_id%3D208%3Bht_id%3D209%3Bht_id%3D210%3Bht_id%3D212%3Bht_id%3D214%3Bht_id%3D215%3Bht_id%3D216%3Bht_id%3D222%3Bht_id%3D223%3Bht_id%3D224%3Bht_id%3D227&highlighted_hotels=1232235
                    - generic [ref=f1e894]:
                      - button "Save Romance al Colosseo to a trip list" [ref=f1e902]
                      - generic [ref=f1e908]:
                        - generic [ref=f1e909]:
                          - generic [ref=f1e910]:
                            - heading "Romance al Colosseo" [level=3] [ref=f1e911]
                            - generic [ref=f1e912]: Rione Monti, Italy, Rome
                          - generic [ref=f1e915]:
                            - generic [ref=f1e916]: "9.6"
                            - generic [ref=f1e917]: "9.6"
                            - generic [ref=f1e918]: Exceptional
                            - generic [ref=f1e919]:
                              - generic [ref=f1e920]: Exceptional
                              - generic [ref=f1e921]: 83 reviews
                        - generic [ref=f1e924]:
                          - generic [ref=f1e925]: Starting from
                          - generic [ref=f1e926]: ₹ 51,096
                          - generic [ref=f1e928]: Price ₹ 51,096
                - group [ref=f1e929]:
                  - link "Save The Apartments by The Sloane Club to a trip list The Apartments by The Sloane Club Kensington and Chelsea, United Kingdom, London 8.9 Excellent Starting from Price ₹ 47,584" [ref=f1e930] [cursor=pointer]:
                    - /url: https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&dest_id=1129506&dest_type=hotel&nflt=ht_id%3D201%3Bht_id%3D213%3Bht_id%3D219%3Bht_id%3D220%3Bht_id%3D228%3Bht_id%3D229%3Bht_id%3D230%3Bht_id%3D232%3Bht_id%3D208%3Bht_id%3D209%3Bht_id%3D210%3Bht_id%3D212%3Bht_id%3D214%3Bht_id%3D215%3Bht_id%3D216%3Bht_id%3D222%3Bht_id%3D223%3Bht_id%3D224%3Bht_id%3D227&highlighted_hotels=1129506
                    - generic [ref=f1e931]:
                      - button "Save The Apartments by The Sloane Club to a trip list" [ref=f1e939]
                      - generic [ref=f1e945]:
                        - generic [ref=f1e946]:
                          - generic [ref=f1e947]:
                            - heading "The Apartments by The Sloane Club" [level=3] [ref=f1e948]
                            - generic [ref=f1e949]: Kensington and Chelsea, United Kingdom, London
                          - generic [ref=f1e952]:
                            - generic [ref=f1e953]: "8.9"
                            - generic [ref=f1e954]: "8.9"
                            - generic [ref=f1e955]: Excellent
                            - generic [ref=f1e956]:
                              - generic [ref=f1e957]: Excellent
                              - generic [ref=f1e958]: 258 reviews
                        - generic [ref=f1e961]:
                          - generic [ref=f1e962]: Starting from
                          - generic [ref=f1e963]: ₹ 47,584
                          - generic [ref=f1e965]: Price ₹ 47,584
                - group [ref=f1e966]:
                  - link "Save Numa Florence Vita to a trip list Numa Florence Vita Santa Maria Novella, Italy, Florence 9.0 Wonderful Starting from Price ₹ 29,308" [ref=f1e967] [cursor=pointer]:
                    - /url: https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&dest_id=2132601&dest_type=hotel&nflt=ht_id%3D201%3Bht_id%3D213%3Bht_id%3D219%3Bht_id%3D220%3Bht_id%3D228%3Bht_id%3D229%3Bht_id%3D230%3Bht_id%3D232%3Bht_id%3D208%3Bht_id%3D209%3Bht_id%3D210%3Bht_id%3D212%3Bht_id%3D214%3Bht_id%3D215%3Bht_id%3D216%3Bht_id%3D222%3Bht_id%3D223%3Bht_id%3D224%3Bht_id%3D227&highlighted_hotels=2132601
                    - generic [ref=f1e968]:
                      - button "Save Numa Florence Vita to a trip list" [ref=f1e976]
                      - generic [ref=f1e982]:
                        - generic [ref=f1e983]:
                          - generic [ref=f1e984]:
                            - heading "Numa Florence Vita" [level=3] [ref=f1e985]
                            - generic [ref=f1e986]: Santa Maria Novella, Italy, Florence
                          - generic [ref=f1e989]:
                            - generic [ref=f1e990]: "9.0"
                            - generic [ref=f1e991]: "9.0"
                            - generic [ref=f1e992]: Wonderful
                            - generic [ref=f1e993]:
                              - generic [ref=f1e994]: Wonderful
                              - generic [ref=f1e995]: 967 reviews
                        - generic [ref=f1e998]:
                          - generic [ref=f1e999]: Starting from
                          - generic [ref=f1e1000]: ₹ 29,308
                          - generic [ref=f1e1002]: Price ₹ 29,308
                - group [ref=f1e1003]:
                  - link "Save 7Seasons Apartments Budapest to a trip list 7Seasons Apartments Budapest 06. Terézváros, Hungary, Budapest 8.8 Excellent Starting from Price ₹ 14,635" [ref=f1e1004] [cursor=pointer]:
                    - /url: https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&dest_id=78365&dest_type=hotel&nflt=ht_id%3D201%3Bht_id%3D213%3Bht_id%3D219%3Bht_id%3D220%3Bht_id%3D228%3Bht_id%3D229%3Bht_id%3D230%3Bht_id%3D232%3Bht_id%3D208%3Bht_id%3D209%3Bht_id%3D210%3Bht_id%3D212%3Bht_id%3D214%3Bht_id%3D215%3Bht_id%3D216%3Bht_id%3D222%3Bht_id%3D223%3Bht_id%3D224%3Bht_id%3D227&highlighted_hotels=78365
                    - generic [ref=f1e1005]:
                      - button "Save 7Seasons Apartments Budapest to a trip list" [ref=f1e1013]
                      - generic [ref=f1e1019]:
                        - generic [ref=f1e1020]:
                          - generic [ref=f1e1021]:
                            - heading "7Seasons Apartments Budapest" [level=3] [ref=f1e1022]
                            - generic [ref=f1e1023]: 06. Terézváros, Hungary, Budapest
                          - generic [ref=f1e1026]:
                            - generic [ref=f1e1027]: "8.8"
                            - generic [ref=f1e1028]: "8.8"
                            - generic [ref=f1e1029]: Excellent
                            - generic [ref=f1e1030]:
                              - generic [ref=f1e1031]: Excellent
                              - generic [ref=f1e1032]: 9,867 reviews
                        - generic [ref=f1e1035]:
                          - generic [ref=f1e1036]: Starting from
                          - generic [ref=f1e1037]: ₹ 14,635
                          - generic [ref=f1e1039]: Price ₹ 14,635
                - group [ref=f1e1040]:
                  - link "Save Villa Domina to a trip list Villa Domina Split City Center, Croatia, Split 9.2 Wonderful Starting from Price ₹ 12,184" [ref=f1e1041] [cursor=pointer]:
                    - /url: https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&dest_id=539886&dest_type=hotel&nflt=ht_id%3D201%3Bht_id%3D213%3Bht_id%3D219%3Bht_id%3D220%3Bht_id%3D228%3Bht_id%3D229%3Bht_id%3D230%3Bht_id%3D232%3Bht_id%3D208%3Bht_id%3D209%3Bht_id%3D210%3Bht_id%3D212%3Bht_id%3D214%3Bht_id%3D215%3Bht_id%3D216%3Bht_id%3D222%3Bht_id%3D223%3Bht_id%3D224%3Bht_id%3D227&highlighted_hotels=539886
                    - generic [ref=f1e1042]:
                      - button "Save Villa Domina to a trip list" [ref=f1e1050]
                      - generic [ref=f1e1056]:
                        - generic [ref=f1e1057]:
                          - generic [ref=f1e1058]:
                            - heading "Villa Domina" [level=3] [ref=f1e1059]
                            - generic [ref=f1e1060]: Split City Center, Croatia, Split
                          - generic [ref=f1e1063]:
                            - generic [ref=f1e1064]: "9.2"
                            - generic [ref=f1e1065]: "9.2"
                            - generic [ref=f1e1066]: Wonderful
                            - generic [ref=f1e1067]:
                              - generic [ref=f1e1068]: Wonderful
                              - generic [ref=f1e1069]: 1,349 reviews
                        - generic [ref=f1e1072]:
                          - generic [ref=f1e1073]: Starting from
                          - generic [ref=f1e1074]: ₹ 12,184
                          - generic [ref=f1e1076]: Price ₹ 12,184
                - group [ref=f1e1077]:
                  - link "Save New Sugar Loft Apartments to a trip list New Sugar Loft Apartments Santa Teresa, Brazil, Rio de Janeiro 8.0 Very Good Starting from Price ₹ 7,515" [ref=f1e1078] [cursor=pointer]:
                    - /url: https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&dest_id=913677&dest_type=hotel&nflt=ht_id%3D201%3Bht_id%3D213%3Bht_id%3D219%3Bht_id%3D220%3Bht_id%3D228%3Bht_id%3D229%3Bht_id%3D230%3Bht_id%3D232%3Bht_id%3D208%3Bht_id%3D209%3Bht_id%3D210%3Bht_id%3D212%3Bht_id%3D214%3Bht_id%3D215%3Bht_id%3D216%3Bht_id%3D222%3Bht_id%3D223%3Bht_id%3D224%3Bht_id%3D227&highlighted_hotels=913677
                    - generic [ref=f1e1079]:
                      - button "Save New Sugar Loft Apartments to a trip list" [ref=f1e1087]
                      - generic [ref=f1e1093]:
                        - generic [ref=f1e1094]:
                          - generic [ref=f1e1095]:
                            - heading "New Sugar Loft Apartments" [level=3] [ref=f1e1096]
                            - generic [ref=f1e1097]: Santa Teresa, Brazil, Rio de Janeiro
                          - generic [ref=f1e1100]:
                            - generic [ref=f1e1101]: "8.0"
                            - generic [ref=f1e1102]: "8.0"
                            - generic [ref=f1e1103]: Very Good
                            - generic [ref=f1e1104]:
                              - generic [ref=f1e1105]: Very Good
                              - generic [ref=f1e1106]: 855 reviews
                        - generic [ref=f1e1109]:
                          - generic [ref=f1e1110]: Starting from
                          - generic [ref=f1e1111]: ₹ 7,515
                          - generic [ref=f1e1113]: Price ₹ 7,515
                - group [ref=f1e1114]:
                  - link "Save Oriente Palace Apartments to a trip list Oriente Palace Apartments Madrid City Center, Spain, Madrid 8.9 Excellent Starting from Price ₹ 13,416" [ref=f1e1115] [cursor=pointer]:
                    - /url: https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&dest_id=2182677&dest_type=hotel&nflt=ht_id%3D201%3Bht_id%3D213%3Bht_id%3D219%3Bht_id%3D220%3Bht_id%3D228%3Bht_id%3D229%3Bht_id%3D230%3Bht_id%3D232%3Bht_id%3D208%3Bht_id%3D209%3Bht_id%3D210%3Bht_id%3D212%3Bht_id%3D214%3Bht_id%3D215%3Bht_id%3D216%3Bht_id%3D222%3Bht_id%3D223%3Bht_id%3D224%3Bht_id%3D227&highlighted_hotels=2182677
                    - generic [ref=f1e1116]:
                      - button "Save Oriente Palace Apartments to a trip list" [ref=f1e1124]
                      - generic [ref=f1e1130]:
                        - generic [ref=f1e1131]:
                          - generic [ref=f1e1132]:
                            - heading "Oriente Palace Apartments" [level=3] [ref=f1e1133]
                            - generic [ref=f1e1134]: Madrid City Center, Spain, Madrid
                          - generic [ref=f1e1137]:
                            - generic [ref=f1e1138]: "8.9"
                            - generic [ref=f1e1139]: "8.9"
                            - generic [ref=f1e1140]: Excellent
                            - generic [ref=f1e1141]:
                              - generic [ref=f1e1142]: Excellent
                              - generic [ref=f1e1143]: 3,660 reviews
                        - generic [ref=f1e1146]:
                          - generic [ref=f1e1147]: Starting from
                          - generic [ref=f1e1148]: ₹ 13,416
                          - generic [ref=f1e1150]: Price ₹ 13,416
                - group [ref=f1e1151]:
                  - link "Save Cheval Three Quays at The Tower of London to a trip list Cheval Three Quays at The Tower of London City of London, United Kingdom, London 9.5 Exceptional Starting from Price ₹ 47,813" [ref=f1e1152] [cursor=pointer]:
                    - /url: https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&dest_id=785838&dest_type=hotel&nflt=ht_id%3D201%3Bht_id%3D213%3Bht_id%3D219%3Bht_id%3D220%3Bht_id%3D228%3Bht_id%3D229%3Bht_id%3D230%3Bht_id%3D232%3Bht_id%3D208%3Bht_id%3D209%3Bht_id%3D210%3Bht_id%3D212%3Bht_id%3D214%3Bht_id%3D215%3Bht_id%3D216%3Bht_id%3D222%3Bht_id%3D223%3Bht_id%3D224%3Bht_id%3D227&highlighted_hotels=785838
                    - generic [ref=f1e1153]:
                      - button "Save Cheval Three Quays at The Tower of London to a trip list" [ref=f1e1161]
                      - generic [ref=f1e1167]:
                        - generic [ref=f1e1168]:
                          - generic [ref=f1e1169]:
                            - heading "Cheval Three Quays at The Tower of London" [level=3] [ref=f1e1170]
                            - generic [ref=f1e1171]: City of London, United Kingdom, London
                          - generic [ref=f1e1174]:
                            - generic [ref=f1e1175]: "9.5"
                            - generic [ref=f1e1176]: "9.5"
                            - generic [ref=f1e1177]: Exceptional
                            - generic [ref=f1e1178]:
                              - generic [ref=f1e1179]: Exceptional
                              - generic [ref=f1e1180]: 878 reviews
                        - generic [ref=f1e1183]:
                          - generic [ref=f1e1184]: Starting from
                          - generic [ref=f1e1185]: ₹ 47,813
                          - generic [ref=f1e1187]: Price ₹ 47,813
                - group [ref=f1e1188]:
                  - link "Save Luxury Apartments Villa Klara to a trip list Luxury Apartments Villa Klara Znjan, Croatia, Split 9.3 Wonderful Starting from Price ₹ 18,660" [ref=f1e1189] [cursor=pointer]:
                    - /url: https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&dest_id=1067442&dest_type=hotel&nflt=ht_id%3D201%3Bht_id%3D213%3Bht_id%3D219%3Bht_id%3D220%3Bht_id%3D228%3Bht_id%3D229%3Bht_id%3D230%3Bht_id%3D232%3Bht_id%3D208%3Bht_id%3D209%3Bht_id%3D210%3Bht_id%3D212%3Bht_id%3D214%3Bht_id%3D215%3Bht_id%3D216%3Bht_id%3D222%3Bht_id%3D223%3Bht_id%3D224%3Bht_id%3D227&highlighted_hotels=1067442
                    - generic [ref=f1e1190]:
                      - button "Save Luxury Apartments Villa Klara to a trip list" [ref=f1e1198]
                      - generic [ref=f1e1204]:
                        - generic [ref=f1e1205]:
                          - generic [ref=f1e1206]:
                            - heading "Luxury Apartments Villa Klara" [level=3] [ref=f1e1207]
                            - generic [ref=f1e1208]: Znjan, Croatia, Split
                          - generic [ref=f1e1211]:
                            - generic [ref=f1e1212]: "9.3"
                            - generic [ref=f1e1213]: "9.3"
                            - generic [ref=f1e1214]: Wonderful
                            - generic [ref=f1e1215]:
                              - generic [ref=f1e1216]: Wonderful
                              - generic [ref=f1e1217]: 170 reviews
                        - generic [ref=f1e1220]:
                          - generic [ref=f1e1221]: Starting from
                          - generic [ref=f1e1222]: ₹ 18,660
                          - generic [ref=f1e1224]: Price ₹ 18,660
              - 'button "Next: Homes guests love" [ref=f1e1225] [cursor=pointer]'
        - generic [ref=f1e1243]:
          - heading "Travel more, spend less" [level=2] [ref=f1e1245]
          - generic [ref=f1e1250]:
            - heading "Sign in, save money" [level=3] [ref=f1e1251]
            - generic [ref=f1e1252]: Save 10% or more at participating properties – just look for the blue Genius label
            - generic [ref=f1e1253]:
              - link "Sign in" [ref=f1e1254] [cursor=pointer]:
                - /url: https://account.booking.com/auth/oauth2?client_id=vO1Kblk7xX9tUn2cpZLS&redirect_uri=https%3A%2F%2Fsecure.booking.com%2Flogin.html%3Fop%3Doauth_return&response_type=code&lang=en-us&aid=304142&bkng_action=index&state=UtcB7a4Nj-vSPUwPVhAHavdQ4WLgvB5LXrz-_B7tbFqxydXv08J5W7PDzSUy7AZDUxSEwlnRTvCc8CJXK2v1R1mOHK_3spFVTr-_NOl38AHqKLRFbTH0rZtmBGexGL-1Oa_DXVNERf4umQBMoZN76Wy63Y1auMPztyP7Et83dllYJcjpS2axPQ95CTC10SWOF-56vuKLzYz8ay_kmVxL0lp1L57qEunjnjNJZJM_Aok2lm3hajicC3mx3Z4a6KgV9iw6VyYOQIQuCSPK3PurqFPnnN616DysjJc%3D*eyJpZCI6ImluZGV4In0%3D
              - link "Register" [ref=f1e1256] [cursor=pointer]:
                - /url: https://account.booking.com/auth/oauth2?client_id=vO1Kblk7xX9tUn2cpZLS&redirect_uri=https%3A%2F%2Fsecure.booking.com%2Flogin.html%3Fop%3Doauth_return&response_type=code&lang=en-us&aid=304142&bkng_action=index&state=UtcB7a4Nj-vSPUwPVhAHavdQ4WLgvB5LXrz-_B7tbFqxydXv08J5W7PDzSUy7AZDUxSEwlnRTvCc8CJXK2v1R1mOHK_3spFVTr-_NOl38AHqKLRFbTH0rZtmBGexGL-1Oa_DXVNERf4umQBMoZN76Wy63Y1auMPztyP7Et83dllYJcjpS2axPQ95CTC10SWOF-56vuKLzYz8ay_kmVxL0lp1L57qEunjnjNJZJM_Aok2lm3hajicC3mx3Z4a6KgV9iw6VyYOQIQuCSPK3PurqFPnnN616DysjJc%3D*eyJpZCI6ImluZGV4In0%3D
        - generic [ref=f1e1267]:
          - heading "Popular with travelers from India" [level=2] [ref=f1e1269]
          - navigation [ref=f1e1270]:
            - tablist [ref=f1e1272]:
              - tab "Domestic cities" [selected] [ref=f1e1273] [cursor=pointer]
              - tab "International cities" [ref=f1e1276] [cursor=pointer]
              - tab "Regions" [ref=f1e1279] [cursor=pointer]
              - tab "Countries" [ref=f1e1282] [cursor=pointer]
              - tab "Places to stay" [ref=f1e1285] [cursor=pointer]
              - tab "Things to do" [ref=f1e1288] [cursor=pointer]
            - tabpanel "Domestic cities" [ref=f1e1292]:
              - generic [ref=f1e1293]:
                - list [ref=f1e1294]:
                  - listitem [ref=f1e1295]:
                    - link "Ooty hotels" [ref=f1e1299] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/udagamandalam.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1301]:
                    - link "Hyderabad hotels" [ref=f1e1305] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/hyderabad.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1307]:
                    - link "Jaipur hotels" [ref=f1e1311] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/jaipur.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1313]:
                    - link "Puri hotels" [ref=f1e1317] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/puri.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1319]:
                    - link "Cochin hotels" [ref=f1e1323] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/cochin.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1325]:
                    - link "Munnar hotels" [ref=f1e1329] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/munnar.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1331]:
                    - link "Mumbai hotels" [ref=f1e1335] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/bombay.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1337]:
                    - link "Bangalore hotels" [ref=f1e1341] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/bengaluru.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1343]:
                    - link "Udaipur hotels" [ref=f1e1347] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/udaipur.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1349]:
                    - link "Varanasi hotels" [ref=f1e1353] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/benares.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1355]:
                    - link "Srinagar hotels" [ref=f1e1359] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/srinagar.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1361]:
                    - link "Rishīkesh hotels" [ref=f1e1365] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/rishikesh.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1367]:
                    - link "Hampi hotels" [ref=f1e1371] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/hampi.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1373]:
                    - link "Pondicherry hotels" [ref=f1e1377] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/pondicherry.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1379]:
                    - link "Varkala hotels" [ref=f1e1383] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/varkkallai.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1385]:
                    - link "Alleppey hotels" [ref=f1e1389] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/alleppey.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1391]:
                    - link "Shimla hotels" [ref=f1e1395] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/simla.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1397]:
                    - link "Nainital hotels" [ref=f1e1401] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/naini-tal.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1403]:
                    - link "Mangalore hotels" [ref=f1e1407] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/mangalore.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1409]:
                    - link "Lonavala hotels" [ref=f1e1413] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/lonavale.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1415]:
                    - link "Ahmedabad hotels" [ref=f1e1419] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/ahmedabad.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1421]:
                    - link "Ayodhya hotels" [ref=f1e1425] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/ayodhya.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1427]:
                    - link "Kolkata hotels" [ref=f1e1431] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/calcutta.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1433]:
                    - link "Alibaug hotels" [ref=f1e1437] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/alibaug.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                  - listitem [ref=f1e1439]:
                    - link "Tiruvannāmalai hotels" [ref=f1e1443] [cursor=pointer]:
                      - /url: https://www.booking.com/city/in/tiruvannamalai.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
                - button "Show more" [ref=f1e1446] [cursor=pointer]
    - contentinfo [ref=f1e1465]:
      - navigation "Quick Links" [ref=f1e1468]:
        - list [ref=f1e1469]:
          - listitem [ref=f1e1470]:
            - link "Countries" [ref=f1e1471] [cursor=pointer]:
              - /url: https://www.booking.com/country.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1474]:
            - link "Regions" [ref=f1e1475] [cursor=pointer]:
              - /url: https://www.booking.com/region.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1478]:
            - link "Cities" [ref=f1e1479] [cursor=pointer]:
              - /url: https://www.booking.com/city.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1482]:
            - link "Districts" [ref=f1e1483] [cursor=pointer]:
              - /url: https://www.booking.com/district.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1486]:
            - link "Airports" [ref=f1e1487] [cursor=pointer]:
              - /url: https://www.booking.com/airport.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1490]:
            - link "Hotels" [ref=f1e1491] [cursor=pointer]:
              - /url: https://www.booking.com/hotel/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1494]:
            - link "Places of interest" [ref=f1e1495] [cursor=pointer]:
              - /url: https://www.booking.com/landmark.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1498]:
            - link "Vacation Homes" [ref=f1e1499] [cursor=pointer]:
              - /url: https://www.booking.com/booking-home/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1502]:
            - link "Apartments" [ref=f1e1503] [cursor=pointer]:
              - /url: https://www.booking.com/apartments/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1506]:
            - link "Resorts" [ref=f1e1507] [cursor=pointer]:
              - /url: https://www.booking.com/resorts/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1510]:
            - link "Villas" [ref=f1e1511] [cursor=pointer]:
              - /url: https://www.booking.com/villas/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1514]:
            - link "Hostels" [ref=f1e1515] [cursor=pointer]:
              - /url: https://www.booking.com/hostels/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1518]:
            - link "B&Bs" [ref=f1e1519] [cursor=pointer]:
              - /url: https://www.booking.com/bed-and-breakfast/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1522]:
            - link "Guest Houses" [ref=f1e1523] [cursor=pointer]:
              - /url: https://www.booking.com/guest-house/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1526]:
            - link "Unique places to stay" [ref=f1e1527] [cursor=pointer]:
              - /url: https://www.booking.com/accommodations.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1530]:
            - link "All destinations" [ref=f1e1531] [cursor=pointer]:
              - /url: https://www.booking.com/destination.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1534]:
            - link "All flight destinations" [ref=f1e1535] [cursor=pointer]:
              - /url: https://www.booking.com/flights/sitemap.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1538]:
            - link "All car rental locations" [ref=f1e1539] [cursor=pointer]:
              - /url: https://www.booking.com/cars/sitemap.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1542]:
            - link "All vacation destinations" [ref=f1e1543] [cursor=pointer]:
              - /url: https://www.booking.com/holidays/sitemap.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1546]:
            - link "Guides" [ref=f1e1547] [cursor=pointer]:
              - /url: https://www.booking.com/guides/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1550]:
            - link "Discover" [ref=f1e1551] [cursor=pointer]:
              - /url: https://www.booking.com/discover.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - text: .
          - listitem [ref=f1e1554]:
            - link "Discover monthly stays" [ref=f1e1555] [cursor=pointer]:
              - /url: https://www.booking.com/extended-stays/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
      - generic [ref=f1e1559]:
        - generic [ref=f1e1560]:
          - heading "Support" [level=3] [ref=f1e1562]
          - list [ref=f1e1563]:
            - listitem [ref=f1e1564]:
              - link "Manage your trips" [ref=f1e1565] [cursor=pointer]:
                - /url: https://secure.booking.com/content/cs.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - listitem [ref=f1e1567]:
              - link "Contact Customer Service" [ref=f1e1568] [cursor=pointer]:
                - /url: https://secure.booking.com/help.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - listitem [ref=f1e1570]:
              - link "Safety Resource Center" [ref=f1e1571] [cursor=pointer]:
                - /url: https://www.booking.com/trust_and_safety.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
        - generic [ref=f1e1573]:
          - heading "Discover" [level=3] [ref=f1e1575]
          - list [ref=f1e1576]:
            - listitem [ref=f1e1577]:
              - link "Genius loyalty program" [ref=f1e1578] [cursor=pointer]:
                - /url: https://www.booking.com/genius.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - listitem [ref=f1e1580]:
              - link "Seasonal and holiday deals" [ref=f1e1581] [cursor=pointer]:
                - /url: https://www.booking.com/deals/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - listitem [ref=f1e1583]:
              - link "Travel articles" [ref=f1e1584] [cursor=pointer]:
                - /url: https://www.booking.com/articles.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - listitem [ref=f1e1586]:
              - link "Booking.com for Business" [ref=f1e1587] [cursor=pointer]:
                - /url: https://business.booking.com/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - listitem [ref=f1e1589]:
              - link "Traveller Review Awards" [ref=f1e1590] [cursor=pointer]:
                - /url: https://www.booking.com/traveller-awards/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - listitem [ref=f1e1592]:
              - link "Car rental" [ref=f1e1593] [cursor=pointer]:
                - /url: https://www.booking.com/cars/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - listitem [ref=f1e1595]:
              - link "Flight finder" [ref=f1e1596] [cursor=pointer]:
                - /url: https://booking.com/pxgo?lang=en-us&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&url=https%3A%2F%2Fbooking.kayak.com%2Fin%3Fsid%3D654b1ac92e4f166cd3ad0b201ccec0fc%26mc%3DINR%26bdclc%3Den-us%26p%3Dfooter_link%26a%3Dbdc%252Ffooter_link&token=UmFuZG9tSVYkc2RlIyh9Yek6N0IyIDltocYiZvkOGRwejlYcrvnRoOHTdpbcfLm9fkem_ZBMyR1Yi68vweqOJ9Kdn3Xd3t_y8wDbFb1fj4BBCNGh8fEF1CulGoPDs_UuLfbZ_zO5qzBsbCR8KX0PkLjBD1AXn8NNo7z2ltZML43KFU36y-oudmMswnqFkbLk-SxdYDkF99CbqXy1601znCLKM_Wd-uOPyoid8fEnW-8SvBU3I2F94heNaLxRVdLJKFGOY6Nrbw7k1AvCOrm887u2oS1-KaRGOidH99152p8DCTWhGfb5lXHwqV_Tp5K3FRH1wdjB_SS3CAapFm8AiXc9PpKUwSIRKnwrbMgwM1hR2MpIk7imSOOHBEF84T-gykme1xnTRNVxrIpIMFumdj7zXK_LJnelpL_Y4Bo6Z2pJ8y3U8Tt6YpCB-3S26TyLYuCCZOh6lqufw_IYHCxZVJQ0nk6xgBdQ96Oy7Yax6sqD1ZjfV4JNRjq1ycGH5o66tG7-Ok-sRamG9spK5mi8Lg&aid=304142
            - listitem [ref=f1e1598]:
              - link "Restaurant reservations" [ref=f1e1599] [cursor=pointer]:
                - /url: https://www.opentable.com/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&ref=16087
            - listitem [ref=f1e1601]:
              - link "Booking.com for Travel Agents" [ref=f1e1602] [cursor=pointer]:
                - /url: https://www.booking.com/affiliate-program/v2/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc&utm_campaign=booking-footer&utm_content=travel-agents-link&utm_medium=referral&utm_source=booking.com
        - generic [ref=f1e1604]:
          - heading "Terms and settings" [level=3] [ref=f1e1606]
          - list [ref=f1e1607]:
            - listitem [ref=f1e1608]:
              - link "Privacy Notice" [ref=f1e1609] [cursor=pointer]:
                - /url: https://www.booking.com/content/privacy.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - listitem [ref=f1e1611]:
              - link "Terms of Service" [ref=f1e1612] [cursor=pointer]:
                - /url: https://www.booking.com/content/terms.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - listitem [ref=f1e1614]:
              - link "Accessibility Statement" [ref=f1e1615] [cursor=pointer]:
                - /url: https://www.booking.com/content/accessibility_statement.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - listitem [ref=f1e1617]:
              - link "Grievance officer" [ref=f1e1618] [cursor=pointer]:
                - /url: https://secure.booking.com/content/complaints.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - listitem [ref=f1e1620]:
              - link "Modern Slavery Statement" [ref=f1e1621] [cursor=pointer]:
                - /url: https://www.bookingholdings.com/modern-slavery-statement/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
            - listitem [ref=f1e1623]:
              - link "Human Rights Statement" [ref=f1e1624] [cursor=pointer]:
                - /url: https://www.bookingholdings.com/about/compliance-and-ethics/human-rights/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
        - generic [ref=f1e1626]:
          - heading "Partners" [level=3] [ref=f1e1628]
          - list [ref=f1e1629]:
            - listitem [ref=f1e1630]:
              - link "Extranet login" [ref=f1e1631] [cursor=pointer]:
                - /url: https://admin.booking.com/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc&utm_campaign=login_footer_v0&utm_medium=frontend&utm_source=extranet_login_footer
            - listitem [ref=f1e1633]:
              - link "Partner help" [ref=f1e1634] [cursor=pointer]:
                - /url: https://partner.booking.com/en-us?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc&utm_campaign=footer_list&utm_medium=frontend_footer&utm_source=booking.com
            - listitem [ref=f1e1636]:
              - link "List your property" [ref=f1e1637] [cursor=pointer]:
                - /url: https://join.booking.com/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&lang=en-us&sid=654b1ac92e4f166cd3ad0b201ccec0fc&utm_medium=frontend&utm_source=footer_menu
            - listitem [ref=f1e1639]:
              - link "Become an affiliate" [ref=f1e1640] [cursor=pointer]:
                - /url: https://www.booking.com/affiliate-program/v2/index.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc&utm_campaign=booking-footer&utm_content=become-an-affiliate-link&utm_medium=referral&utm_source=booking.com
        - generic [ref=f1e1642]:
          - heading "About" [level=3] [ref=f1e1644]
          - list [ref=f1e1645]:
            - listitem [ref=f1e1646]:
              - link "About Booking.com" [ref=f1e1647] [cursor=pointer]:
                - /url: https://www.booking.com/content/about.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - listitem [ref=f1e1649]:
              - link "How We Work" [ref=f1e1650] [cursor=pointer]:
                - /url: https://www.booking.com/content/how_we_work.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - listitem [ref=f1e1652]:
              - link "Sustainability" [ref=f1e1653] [cursor=pointer]:
                - /url: https://sustainability.booking.com/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
            - listitem [ref=f1e1655]:
              - link "Press center" [ref=f1e1656] [cursor=pointer]:
                - /url: https://news.booking.com/en-in
            - listitem [ref=f1e1658]:
              - link "Careers" [ref=f1e1659] [cursor=pointer]:
                - /url: https://careers.booking.com/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
            - listitem [ref=f1e1661]:
              - link "Investor relations" [ref=f1e1662] [cursor=pointer]:
                - /url: https://www.bookingholdings.com/?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB
            - listitem [ref=f1e1664]:
              - link "Corporate contact" [ref=f1e1665] [cursor=pointer]:
                - /url: https://www.booking.com/content/contact-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
            - listitem [ref=f1e1667]:
              - link "Content guidelines and reporting" [ref=f1e1668] [cursor=pointer]:
                - /url: https://www.booking.com/content-moderation-policy/overview-page.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoCB-dQGwAIB0gIkMjQ4ODllMDQtNGFiNi00OGMwLWEzZjctYjk1NThlOGU5YmEw2AIB4AIB&sid=654b1ac92e4f166cd3ad0b201ccec0fc
      - generic [ref=f1e1671]:
        - generic [ref=f1e1672]:
          - 'button "Language: English (US)" [ref=f1e1674] [cursor=pointer]'
          - button "Prices in Indian Rupee" [ref=f1e1679] [cursor=pointer]:
            - generic [ref=f1e1680]: INR
        - separator [ref=f1e1681]
        - generic [ref=f1e1682]:
          - generic [ref=f1e1683]: Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.
          - generic [ref=f1e1685]: Copyright © 1996–2026 Booking.com™. All rights reserved.
        - generic [ref=f1e1686]:
          - img "Booking.com" [ref=f1e1687]
          - img "Priceline.com" [ref=f1e1690]
          - img "Kayak" [ref=f1e1694]
          - img "Agoda" [ref=f1e1709]
          - img "OpenTable" [ref=f1e1718]
```

# Test source

```ts
  1   | import { Page, expect, test, Locator } from "@playwright/test";
  2   | 
  3   | // Select the from date and to date from the same or different month and year
  4   | test("Custom Date Picker Dual Month", async ({ page }) => {
  5   | 
  6   |     const targetMonth: string = "August";
  7   |     const targetYear: string = "2026";
  8   |     const targetFromDate: string = "23";
  9   | 
  10  |     const endTargetMonth: string = "December";
  11  |     const endTargetYear: string = "2026";
  12  |     const targetToDate: string = "28";
  13  | 
  14  |     await page.goto("https://www.booking.com");
  15  |     const popUpCloseBtn: Locator = page.locator("button[aria-label='Dismiss sign-in info.']");
  16  |     await popUpCloseBtn.waitFor({ state: "visible", timeout: 10000 });
  17  |     if (await popUpCloseBtn.isVisible()) {
  18  |         await popUpCloseBtn.click();
  19  |     }
  20  |     await page.locator("button[data-testid='searchbox-dates-container']").click();
  21  | 
  22  |     // const monthYearLocator = page.locator("div[data-testid='searchbox-datepicker-calendar'] div div h3").nth(0);
  23  |     // await monthYearLocator.waitFor({ state: "visible", timeout: 10000 });
  24  |     // const monthYearText = await monthYearLocator.textContent()
  25  | 
  26  |     // console.log("Month and Year:", monthYearText);
  27  |     //const nextButtonLocator = page.locator(".ui-datepicker-next");
  28  |     //const prevButtonLocator = page.locator(".ui-datepicker-prev");
  29  |     while (true) {
  30  |         const monthYearLocator = page.locator("div[data-testid='searchbox-datepicker-calendar'] div div h3").nth(0);
  31  |         await monthYearLocator.waitFor({ state: "visible", timeout: 10000 });
  32  |         const monthYearText = await monthYearLocator.textContent()
  33  | 
  34  |         if (monthYearText?.includes(targetMonth) && monthYearText?.includes(targetYear)) {
  35  |             break;
  36  |         }
> 37  |         await page.locator("button[aria-label='Next month']").click();
      |                                                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  38  |     }
  39  | 
  40  |     const tableLocator = page.locator("table[aria-labelledby*='bui-calendar-month']").nth(0);
  41  |     const rows: Locator[] = await tableLocator.locator("tr").all();
  42  |     for (let row of rows) {
  43  |         let valuesLocator: Locator[] = await row.locator("td span span").all();
  44  |         for (let value of valuesLocator) {
  45  |             {
  46  |                 const valueText = await value.innerText();
  47  |                 if (valueText === targetFromDate) {
  48  |                     await value.click();
  49  |                     break;
  50  |                 }
  51  | 
  52  |             }
  53  |         }
  54  |     }
  55  | 
  56  |     // Capturing the end date
  57  | 
  58  |     while (true) {
  59  |         const monthYearLocator = page.locator("div[data-testid='searchbox-datepicker-calendar'] div div h3").nth(0);
  60  |         await monthYearLocator.waitFor({ state: "visible", timeout: 10000 });
  61  |         const monthYearText = await monthYearLocator.textContent();
  62  | 
  63  |         if (monthYearText?.includes(endTargetMonth) && monthYearText?.includes(endTargetYear)) {
  64  |             break;
  65  |         }
  66  |         await page.locator("button[aria-label='Next month']").click();
  67  |     }
  68  | 
  69  |     const endtableLocator = page.locator("table[aria-labelledby*='bui-calendar-month']").nth(0);
  70  |     const endrows: Locator[] = await endtableLocator.locator("tr").all();
  71  |     for (let row of endrows) {
  72  |         const endValues: Locator[] = await row.locator("td span span").all();
  73  |         for (let value of endValues) {
  74  | 
  75  |             const valueText = await value.innerText();
  76  |             if (valueText === targetToDate) {
  77  |                 console.log(await value.textContent());
  78  |                 await value.click();
  79  |                 await page.waitForTimeout(5000);
  80  |                 break;                
  81  |             }
  82  | 
  83  |         }
  84  |         
  85  |     }
  86  |     
  87  | })
  88  | 
  89  | // Select the from date and to date from the consgicutive month and year
  90  | 
  91  | test("Custom Date Picker Dual Month Consecutive", async ({ page }) => {
  92  | 
  93  |     const targetMonth: string = "December";
  94  |     const targetYear: string = "2026";
  95  |     const targetFromDate: string = "23";
  96  | 
  97  |     const endTargetMonth: string = "December";
  98  |     const endTargetYear: string = "2026";
  99  |     const targetToDate: string = "28";
  100 | 
  101 |     await page.goto("https://www.booking.com");
  102 |     const popUpCloseBtn: Locator = page.locator("button[aria-label='Dismiss sign-in info.']");
  103 |     await popUpCloseBtn.waitFor({ state: "visible", timeout: 10000 });
  104 |     if (await popUpCloseBtn.isVisible()) {
  105 |         await popUpCloseBtn.click();
  106 |     }
  107 |     await page.locator("button[data-testid='searchbox-dates-container']").click();
  108 | 
  109 |     while (true) {
  110 |         const monthYearLocator = page.locator("div[data-testid='searchbox-datepicker-calendar'] div div h3").nth(0);
  111 |         await monthYearLocator.waitFor({ state: "visible", timeout: 10000 });
  112 |         const monthYearText = await monthYearLocator.textContent()
  113 | 
  114 |         if (monthYearText?.includes(targetMonth) && monthYearText?.includes(targetYear)) {
  115 |             break;
  116 |         }
  117 |         await page.locator("button[aria-label='Next month']").click();
  118 |     }
  119 | 
  120 |     const tableLocator = page.locator("table[aria-labelledby*='bui-calendar-month']").nth(0);
  121 |     const rows: Locator[] = await tableLocator.locator("tr").all();
  122 |     for (let row of rows) {
  123 |         let valuesLocator: Locator[] = await row.locator("td span span").all();
  124 |         for (let value of valuesLocator) {
  125 |             {
  126 |                 const valueText = await value.innerText();
  127 |                 if (valueText === targetFromDate) {
  128 |                     await value.click();
  129 |                     await page.waitForTimeout(5000);
  130 |                     break;                    
  131 |                 }
  132 | 
  133 |             }
  134 |         }
  135 |     }
  136 | 
  137 |     let pageNo:number=0;
```