<script>
function results() {
//Setting variables
var himalayan = 0;
var siamese = 0;
var coon = 0;
var bengal = 0;
var f = document.f;
var i = 0;

//Getting Quiz Results
for (i = 0; i < f.a.length; i++) if (f.a[i].checked) value = f.a[i].value;
if (value == "1") { himalayan++; }
if (value == "2") { siamese++; }
if (value == "3") { coon++; }
if (value == "4") { bengal++; }

for (i = 0; i < f.b.length; i++) if (f.b[i].checked) value = f.b[i].value;
if (value == "1") { himalayan++; }
if (value == "2") { siamese++; }
if (value == "3") { coon++; }
if (value == "4") { bengal++; }

for (i = 0; i < f.c.length; i++) if (f.c[i].checked) value = f.c[i].value;
if (value == "1") { himalayan++; }
if (value == "2") { siamese++; }
if (value == "3") { coon++; }
if (value == "4") { bengal++; }

//Redirecting to results pages
var out = "himalayan";
i = himalayan;
if (siamese > i) { out ="siamese"; i = siamese; }
if (coon > i) { out ="coon"; i = coon; }
if (bengal > i) { out ="bengal"; i = bengal; }
location.href = out + ".html";
}
</script>