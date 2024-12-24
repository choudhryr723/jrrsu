import '../style/style'
import { useEffect,useRef } from 'react';

export default function FormsTable() {
    const iframeRef = useRef(null);
  
    useEffect(() => {
      // Create an iframe document dynamically
      const iframe = iframeRef.current;
      const iframeDoc = iframe.contentWindow.document;
  
      // Create a new HTML structure inside the iframe
      iframeDoc.open();
      iframeDoc.write(`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
<!-- Bootstrap core CSS -->
    <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">	
	<style>
	.table-bordered td, .table-bordered th {
	padding: 5px;
	vertical-align: middle;
}
		.btn-detail {background:#0057a8; color:#fff; margin-left: 5px;}
		.btn-detail:hover {background:#014686; color:#fff;}
		.form-table-wrapper {width:100%; overflow-x: auto;}
		@media(max-width:479px){
		 .btn-detail { margin-top: 5px; margin-left:0px;}	
		}
	</style>
</head>

<body>
<div class="form-table-wrapper">
<table class="table table-bordered table-striped" cellspacing="0" rules="all" border="1" id="#" style="width:100%;border-collapse:collapse;">
		<tbody><tr>
			<th scope="col">&nbsp;</th><th scope="col">Course Name</th><th scope="col">Last Date</th>
		</tr>
			
		<tr>
		<td align="left" style="width:220px;">        
        <a href="login.aspx?id=1" class="btn btn-danger" target="_parent">Fill Form</a> 
		<a href="shastri-ba.html" class="btn btn-detail" target="_parent">View Detail</a>	
		</td>
        
		<td align="left">SHASTRI (B.A.) (शास्त्री)</td>
		<td align="left">14/12/2024</td>
		</tr>
		
					
		<tr>
		<td align="left" style="width:220px;">
			<a href="login.aspx?id=3" class="btn btn-danger" target="_parent">Fill Form</a>
			<a href="acharya-ma.html" class="btn btn-detail" target="_parent">View Detail</a>
		  </td>
		<td align="left">ACHARYA (M.A.) (आचार्य)</td>
		<td align="left">14/12/2024</td>
		</tr>
			
		<tr>
		<td align="left" style="width:220px;">
			<a href="login.aspx?id=4" class="btn btn-danger" target="_parent">Fill Form</a>
			<a href="siksha-shastri-bed.html" class="btn btn-detail" target="_parent">View Detail</a>
		  </td>
		<td align="left">SIKSHA SHASTRI (B.ED.) (शिक्षाशास्त्री)</td>
		<td align="left">14/12/2024</td>
		</tr>
			
		<tr>
		<td align="left" style="width:220px;">
			<a href="login.aspx?id=6" class="btn btn-danger" target="_parent">Fill Form</a>
			<a href="shastri-siksha-shastri.html" class="btn btn-detail" target="_parent">View Detail</a>
		  </td>
		<td align="left">SHASTRI SHIKSHA SHASTRI (4 YRS INT. COURSE) (शास्त्री-शिक्षाशास्त्री)</td>
		<td align="left">14/12/2024</td>
		</tr>
			
					
		<tr>
			<td align="left" style="width:220px;">
			<a href="login.aspx?id=12" class="btn btn-danger" target="_parent">Fill Form</a>
			<a href="pgdca.html" class="btn btn-detail" target="_parent">View Detail</a>
		  </td>
			<td align="left">POST GRADUATE DIPLOMA IN COMPUTER APPLICATION (PGDCA)</td>
			<td align="left">14/12/2024</td>
		</tr>
			
		<tr>
			<td align="left" style="width:220px;">
			<a href="login.aspx?id=13" class="btn btn-danger" target="_parent">Fill Form</a>
			<a href="pgdyt.html" class="btn btn-detail" target="_parent">View Detail</a>
			</td>
			<td align="left">POST GRADUATE DIPLOMA IN YOGA THERAPHY (PGDYT)</td>
			<td align="left">14/12/2024</td>
		</tr>
			
			<tr>
			<td align="left" style="width:220px;">
			<a href="login.aspx?id=14" class="btn btn-danger" target="_parent">Fill Form</a>
			<a href="diploma-in-karmkand-and-paurohitya.html" class="btn btn-detail" target="_parent">View Detail</a>	
			</td>
			<td align="left">DIPLOMA IN KARM KAND AND PAUROHITYA (कर्मकाण्ड-पौरोहित्य डिप्लोमा)</td>
			<td align="left">14/12/2024</td>
		</tr>
			
		<tr>
			<td align="left" style="width:220px;">
			<a href="login.aspx?id=15" class="btn btn-danger" target="_parent">Fill Form</a>
			<a href="diploma-in-jyotish.html" class="btn btn-detail" target="_parent">View Detail</a>
		  </td>
			<td align="left">DIPLOMA IN JYOTISH (ज्योतिष डिप्लोमा)</td>
			<td align="left">14/12/2024</td>
		</tr>
			
			<tr>
			<td align="left" style="width:220px;">
			<a href="login.aspx?id=16" class="btn btn-danger" target="_parent">Fill Form</a>
			<a href="diploma-in-vastu.html" class="btn btn-detail" target="_parent">View Detail</a>
			</td>
			<td align="left">DIPLOMA IN VASTU (वास्तु डिप्लोमा)</td>
			<td align="left">14/12/2024</td>
		</tr>
			
			<tr>
			<td align="left" style="width:220px;">
			<a href="login.aspx?id=18" class="btn btn-danger" target="_parent">Fill Form</a>
			<a href="research.html" class="btn btn-detail" target="_parent">View Detail</a>
			</td>
			<td align="left">RESEARCH (शोध संस्थान)</td>
			<td align="left">14/12/2024</td>
		</tr>
	</tbody></table>	</div>
	
	<!-- Bootstrap core JavaScript -->
    <script src="../assets/vendor/jquery/jquery.min.js"></script>
    <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
	
</body>
</html>
`);
      iframeDoc.close();  // Close the document to render the content inside iframe
  
    }, []); // Empty dependency array means this runs only once after the component mounts
  
    return (
        <iframe
         ref={iframeRef}
         frameborder="0"
         /> 
    );
}