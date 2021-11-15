# Lab 8 - Starter
contributor: JingtianLin, XianglongWang
1. The automated tests will fit within the Github action that runs whenever code is pushed. Doing this approach we avoid pushing buggy code and corrupt the main branch. Also by checking with Github action we ensure that the code operates under a uniform environment. This avoids buggy codes that cab only operates under certain local configurations.
2. no, because the end-to-end testing tests the site as a whole. You may have a function that is wrong while the code in general works fine. In addition, the end-to-end test might involve several functions working in asosicates, which is harder to find out how the function works singularly
3. no. The message function considers several components including 'sent' and 'receive'. simply testing it with the unit test does not tell the integrity of the function as a whole. 
4. yes, because we are solely testing on maximum message length and this does not involve any other properties.