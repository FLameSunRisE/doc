
## panda
1. Pandas.DataFrame行和列的轉置:
    - pandas.DataFrame.T
    ```
        import pandas as pd
        df = pd.DataFrame({'X': [0, 1, 2], 'Y': [3, 4, 5]}, index=['A', 'B', 'C'])
        print(df)
        #    X  Y
        # A  0  3
        # B  1  4
        # C  2  5

        print(df.T)
        #    A  B  C
        # X  0  1  2
        # Y  3  4  5
    ```
    - Ref : [Pandas.DataFrame行和列的转置](https://blog.csdn.net/qq_18351157/article/details/105931547)
2. 