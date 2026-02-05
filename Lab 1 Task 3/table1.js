var n = 10
var s
document.write("<table>")

for (i = 0; i < n; i++){
    document.write("<tr>")
    for (j = 0; j < n; j++){
        if ((i + 1) > j) s = "class='r1'"
        else s = "class='r2'"
        document.write("<td " + s + "> </td>")
    }
    document.write("</tr>")
}
document.write("</table>")