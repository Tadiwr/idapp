package com.codapt.idapp.features.shared.utils;

import java.util.HashMap;

public class HexUtil {
    
    HashMap<String, String> binHex = new HashMap<>();

    public HexUtil() {
        binHex.put("0000", "0");
        binHex.put("0001", "1");
        binHex.put("0010", "2");
        binHex.put("0011", "3");
        binHex.put("0100", "4");
        binHex.put("0101", "5");
        binHex.put("0110", "6");
        binHex.put("0111", "7");
        binHex.put("1000", "8");
        binHex.put("1001", "9");
        binHex.put("1010", "A");
        binHex.put("1011", "B");
        binHex.put("1100", "C");
        binHex.put("1101", "D");
        binHex.put("1110", "E");
        binHex.put("1111", "F");
    }

    public String toHex(int n) {

        String binStr = BinaryUtil.toBinary(n, true);
        String hexStr = "";
        String nibble = "";

        char[] binDigits = binStr.toCharArray();

        for(char digit : binDigits) {
            if (nibble.length() == 4) {
                hexStr += binHex.get(nibble);
                nibble = "";
                nibble += digit ;
            } else {
                nibble += digit;
            }
        }

        if (nibble.length() == 4) {
            hexStr += binHex.get(nibble);
        }

        return hexStr;

    }
}

