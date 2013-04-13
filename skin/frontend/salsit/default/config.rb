http_path = "/"
css_dir = "css"
sass_dir = "sass"
fonts_dir = "fonts"
images_dir = "img"
javascripts_dir = "js"


# Options
relative_assets = true
line_comments = false
#output_style = :compact		# :nested, :expanded, :compact, :compressed
environment = :production


# Invoke from command line: compass watch -e development --force
output_style = (environment == :production) ? :compact : :expanded


#require 'fileutils'
#on_stylesheet_saved do |file|
#  if File.exists?(file) && File.basename(file) == "style.css"
#    puts "Moving: #{file}"
#    FileUtils.mv(file, File.dirname(file) + "/../" + File.basename(file))
#  end
#end
