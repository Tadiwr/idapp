package com.codapt.idapp.features.shared.utils;

public class BinaryUtil {
    

    /** Function that takes in an integer n and returns the binary string representative
     * 
     * @param n - the number to be converted into binary
     * @param addTrailingZeros - a boolean flag in trailing zeros should be added at the end to 
     * make the number of bits a factor of four
     * 
     */
    public static String toBinary(int n, Boolean addTrailingZeros) {

        int remainder;
        String binStr = "";
        
        while(n != 0) {
            remainder = n % 2;
            binStr += remainder;
            n = Math.floorDiv(n, 2);
        }

        binStr = reverseStr(binStr);

        if (addTrailingZeros) {
            binStr = addTrailingZeros(binStr);
        }

        return binStr;

    }

    private static String reverseStr(String s) {
        StringBuilder builder = new StringBuilder();

        builder.append(s);
        builder.reverse();

        return builder.toString();
    }

    private static String addTrailingZeros(String binStr) {

        int len = binStr.length();
        
        if (len % 4 == 0) {
            return binStr;
        }
        
        binStr = reverseStr(binStr);
        int q = Math.floorDiv(len, 4);
        int zerosToAdd = (4 * (q + 1)) - len;

        for (int x = 0; x < zerosToAdd; x++) {
            binStr += "0";
        }

        return reverseStr(binStr);

    }

}
