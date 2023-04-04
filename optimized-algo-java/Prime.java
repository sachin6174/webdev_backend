import java.util.Scanner;

public class Prime {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        boolean arr[] = new boolean[n + 1];
        
        for(int i = 2;i <= n/2;i++){
            int x = 2;
            for (int j = i * i; j <= n && !arr[i];) {
                arr[j] = true;
                x++;
                j = i * x;
            }
        }

        for (int i = 2; i < arr.length; i++) {
            if(!arr[i]){
                System.out.print(i + " ");
            }
        }
    }
}
