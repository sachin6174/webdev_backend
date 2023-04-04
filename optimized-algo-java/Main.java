import java.util.ArrayList;
import java.util.Scanner;

class Main{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        // int n = in.nextInt();
        int count = in.nextInt();
        ArrayList<Integer> arr = new ArrayList<>();
        for (int i = 2; i <= count; i++) {
            if(checkPrime(i)){
                arr.add(i);
            }
        }
        System.out.println(arr + " ans size is: " + arr.size());
    }

    public static boolean checkPrime(int n){
        boolean bool = true;
        for(int i = 2;i * i <= n;i++){
            if(n % i == 0){
                bool = false;
                break;
            }    
        }
        return bool;
    }
}