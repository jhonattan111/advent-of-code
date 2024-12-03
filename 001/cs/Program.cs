using System;
using System.Linq;

int main()
{
  IEnumerable<string> content = ReadLines("../input");

  List<int> fst_arr = new();
  List<int> scd_arr = new();

  foreach (string c in content)
  {
    int.TryParse(c[..5], out int fa);
    int.TryParse(c[8..], out int sa);
    fst_arr.Add(fa);
    scd_arr.Add(sa);
  }

  fst_arr = fst_arr.OrderBy(d => d).ToList();
  scd_arr = scd_arr.OrderBy(d => d).ToList();

  int distance = 0;

  for (int i = 0; i < fst_arr.Count; i++)
  {
    distance += Math.Abs(fst_arr[i] - scd_arr[i]);
  }

  Console.WriteLine($"Distance: {distance}");

  return 0;
}

IEnumerable<string> ReadLines(string path)
{
  StringBuilder sb = new();

  using (StreamReader sr = new(path))
  {
    string line;
    while ((line = sr.ReadLine()) != null)
    {
      yield return line;
    }
  }
}

main();