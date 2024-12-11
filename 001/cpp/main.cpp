#include <iostream>
#include <string>
#include <fstream>

using namespace std;

string readFile(string);

int main() {

    char path[] = "../input";
    readFile(path);
    return 0;
}

string readFile(char path[]) {
    cout << path;
    ifstream file(path);
    string str;
    string file_content;

    while(getline(file, str)) {
        file_content += str;
        file_content.push_back('\n');
    }

    cout << file_content;
    return file_content;
}

/*
void line_to_array(string content, string[] o_arr) {

}
*/