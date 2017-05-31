 #!/usr/bin/env ruby
# by Andronik Ordian

def gcd(a, b)
  if(b == 0)
    return a;
  end
  
  return gcd(b,(a%b));
end

def lcm(a, b)
  return (a*b)/gcd(a,b);
end

if __FILE__ == $0
  a, b = gets.split().map(&:to_i)
  puts "#{lcm(a, b)}"
end
