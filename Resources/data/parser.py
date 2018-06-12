import csv  
import json  
  
f = open( '/Users/lesanche/Documents/leMonde/data-TourDeFrance.csv', 'rU' )   
reader = csv.DictReader( f, fieldnames = ( "year", "type","name", "nationality" ))  

out = json.dumps([row for row in reader ] )  
f = open( '/Users/lesanche/Documents/leMonde/data-TourDeFrance.json', 'w')  
f.write(out)  
print("JSON saved!");  
