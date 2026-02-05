var n = 10
var s
document.write("<table>")

for (i = 0; i < n; i++){
    document.write("<tr>")
    for (j = 0; j < n; j++){
        if (i % 2 == 0 && j % 2 == 0) s = "class='r3'"
        else s = "class='r4'"
        document.write("<td " + s + "> </td>")
    }
    document.write("</tr>")
}
document.write("</table>")